import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {Inputan, Tombol} from '../../components';

class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      newPassword: '',
      newPasswordConfirmation: '',
    };
  }

  onSubmit = () => {
    console.log('Masuk');
    const {password, newPassword, newPasswordConfirmation} = this.state;

    if (newPassword !== newPasswordConfirmation) {
      Alert.alert(
        'Error',
        'Password Baru dan Konfirmasi Password Baru Harus Sama',
      );
    } else if (password && newPassword && newPasswordConfirmation) {
      //Get data email dari local storage
      getData('user').then(res => {
        const parameter = {
          email: res.email,
          password: password,
          newPassword: newPassword,
        };

        this.props.dispatch(changePassword(parameter));
      });
    } else {
      Alert.alert(
        'Error',
        'Password Lama, Password Baru dan Konfirmasi Password Baru Harus Diisi',
      );
    }
  };

  render() {
    const {password, newPassword, newPasswordConfirmation} = this.state;
    return (
      <View style={styles.pages}>
        <View>
          <Inputan
            label="Password Lama"
            secureTextEntry
            value={password}
            onChangeText={password => this.setState({password})}
          />
          <Inputan
            label="Password Baru"
            secureTextEntry
            value={newPassword}
            onChangeText={newPassword => this.setState({newPassword})}
          />
          <Inputan
            label="Konfirmasi Password Baru"
            secureTextEntry
            value={newPasswordConfirmation}
            onChangeText={newPasswordConfirmation =>
              this.setState({newPasswordConfirmation})
            }
          />
        </View>

        <View style={styles.submit}>
          <Tombol type="submit" fontSize={18} onPress={() => this.onSubmit} />
        </View>
      </View>
    );
  }
}

export default connect()(ChangePassword);

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  submit: {
    marginVertical: 30,
    padding: 15,
    fontSize: 20,
  },
});
