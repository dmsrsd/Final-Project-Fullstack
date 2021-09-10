import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Inputan, Tombol} from '../../components';
import {registerUser} from '../../actions/AuthAction';
import {connect} from 'react-redux';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      email: '',
      nomorHp: '',
      password: '',
    };
  }

  componentDidUpdate(prevProps) {
    const {registerResult} = this.props;

    if (registerResult && prevProps.registerResult !== registerResult) {
      this.props.navigation.replace('MainApp');
    }
  }

  onContinue = () => {
    const {nama, email, nomorHp, password} = this.state;
    if (nama && email && nomorHp) {
      const data = {
        nama: nama,
        email: email,
        nomorHp: nomorHp,
        status: 'user',
      };
      //Connect dengan AuthAction
      console.log('DATA :', data);
      this.props.dispatch(registerUser(data, password));
    } else {
      Alert.alert(
        'Error',
        'Nama, Email, Nomor Hp, Password tidak boleh kosong',
      );
    }
  };

  render() {
    const {nama, email, nomorHp, password} = this.state;
    const {registerLoading} = this.props;
    return (
      <View style={styles.page}>
        <View style={styles.judulRegister}>
          <Text style={styles.title}> Silahkan Register dan </Text>
          <Text style={styles.title}> Isi Data Anda </Text>
        </View>
        <View style={styles.card}>
          <Inputan
            label="Nama"
            value={nama}
            onChangeText={nama => this.setState({nama})}
          />
          <Inputan
            label="Email"
            value={email}
            onChangeText={email => this.setState({email})}
          />
          <Inputan
            label="Nomor Handphone"
            keyboardType="number-pad"
            value={nomorHp}
            onChangeText={nomorHp => this.setState({nomorHp})}
          />
          <Inputan
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={password => this.setState({password})}
            loading={registerLoading}
          />
        </View>
        <Tombol
          type="submit"
          onPress={() => this.onContinue()}
          loading={registerLoading}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  registerLoading: state.AuthReducer.registerLoading,
  registerResult: state.AuthReducer.registerResult,
  registerError: state.AuthReducer.registerError,
});

export default connect(mapStateToProps, null)(Register);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#0288D1',
  },
  judulRegister: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 25,
    color: 'black',
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingHorizontal: 30,
    paddingBottom: 30,
    paddingTop: 40,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 10,
  },
  buttonSubmit: {
    marginHorizontal: 70,
    backgroundColor: '#3DB2FF',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingBottom: 15,
    marginTop: 85,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSubmit: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bgImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});
