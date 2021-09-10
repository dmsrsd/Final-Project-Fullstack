import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Text, StyleSheet, View, Image, Alert} from 'react-native';
import {dummyProfile} from '../../data';
import {Inputan} from '../../components/Kecil';
import {Button} from 'react-native';
import {getData} from '../../utils/LocalStorage';
import {FotoDefault} from '../../assets';
import {launchImageLibrary} from 'react-native-image-picker';
import {updateProfile} from '../../actions/ProfileAction';
import {connect} from 'react-redux';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: '',
      nama: '',
      email: '',
      nomorHp: '',
      avatar: false,
      avatarForDB: '',
      avatarLama: '',
      updateAvatar: false,
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps) {
    const {updateProfileResult} = this.props;

    if (
      updateProfileResult &&
      prevProps.updateProfileResult !== updateProfileResult
    ) {
      Alert.alert('Sukses', 'Update Profile Berhasil');
      this.props.navigation.replace('MainApp');
    }
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res;
      this.setState({
        uid: data.uid,
        nama: data.nama,
        email: data.email,
        nomorHp: data.nomorHp,
        avatar: data.avatar,
        avatarLama: data.avatar,
      });
    });
  };

  getImage = () => {
    launchImageLibrary(
      {
        quality: 1,
        maxWidth: 500,
        maxHeight: 500,
        includeBase64: true,
        selectionLimit: 1,
        cameraType: 'front',
      },
      response => {
        // console.log('CEK RESPON', response);
        if (response.didCancel || response.errorCode || response.errorMessage) {
          Alert.alert('Error', 'You Not Select Any Pictures');
        } else {
          // console.log('response', JSON.stringify(response));
          const source = response.assets[0].uri;
          const fileString = `data:${response.assets[0].type};base64,${response.assets[0].base64}`;

          this.setState({
            avatar: source,
            avatarForDB: fileString,
            updateAvatar: true,
          });
        }
      },
    );
  };

  onSubmit = () => {
    const {nama, email, nomorHp, avatar} = this.state;

    if (nama && nomorHp && avatar) {
      //Dispatch Update Profile
      this.props.dispatch(updateProfile(this.state));
    } else {
      Alert.alert('Error', 'Gagal Update Profile');
    }
  };

  render() {
    const {nama, email, nomorHp, avatar} = this.state;
    const {updateProfileLoading} = this.props;

    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Inputan
            label="Nama"
            value={nama}
            onChangeText={nama => this.setState({nama})}
          />
          <Inputan
            label="No HP"
            value={nomorHp}
            onChangeText={nomorHp => this.setState({nomorHp})}
            keyboardType="number-pad"
          />
          <Inputan label="Email" value={email} disabled />
          <View style={styles.inputFoto}>
            <Text style={styles.label}>Foto Profile</Text>

            <View style={styles.wrapperUpload}>
              <Image
                source={avatar ? {uri: avatar} : FotoDefault}
                style={styles.foto}
              />
              <View style={styles.tombol}>
                <Button
                  title="Change Photo Profile"
                  type="text"
                  padding={7}
                  onPress={() => this.getImage()}
                />
              </View>
            </View>
          </View>
          <View style={styles.submit}>
            <Button
              loading={updateProfileLoading}
              title="Submit"
              type="textIcon"
              icon="submit"
              onPress={() => this.onSubmit()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  updateProfileLoading: state.ProfileReducer.updateProfileLoading,
  updateProfileResult: state.ProfileReducer.updateProfileResult,
  updateProfileError: state.ProfileReducer.updateProfileError,
});

export default connect(mapStateToProps, null)(EditProfile);

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  inputFoto: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 40,
  },
  wrapperUpload: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  tombol: {
    marginLeft: 20,
    flex: 1,
  },
  submit: {
    marginVertical: 30,
    padding: 15,
    fontSize: 20,
  },
});
