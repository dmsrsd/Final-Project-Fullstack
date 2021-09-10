import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Inputan, Tombol} from '../../components/Kecil';
import {LoginUser} from '../../actions/AuthAction';
import {connect} from 'react-redux';
import {LoginWallpaper} from '../../assets';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onButtonLogin = () => {
    const {email, password} = this.state;

    if (email && password) {
      this.props.dispatch(LoginUser(email, password));
    } else {
      Alert.alert('Error', 'Email dan Password Tidak Boleh Kosong');
    }
  };

  componentDidUpdate(prevProps) {
    const {loginResult} = this.props;

    if (loginResult && prevProps.loginResult !== loginResult) {
      this.props.navigation.replace('MainApp');
    }
  }

  render() {
    const {email, password} = this.state;
    const {loginLoading} = this.props;

    return (
      <View style={styles.container}>
        {/* <Image
          style={styles.bgImage}
          source={{
            uri: 'https://image.freepik.com/free-photo/dual-yellow-blue-background-writing-text_23-2147981648.jpg',
          }}
        /> */}

        <Image
          source={LoginWallpaper}
          style={{
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}></Image>

        <View style={styles.page}>
          <View>
            <Text style={styles.logo}>WarTop App </Text>
          </View>
          <View style={styles.cardLogin}>
            <Inputan
              label="Email"
              value={email}
              onChangeText={email => this.setState({email})}
            />
            <Inputan
              label="Password"
              secureTextEntry
              value={password}
              onChangeText={password => this.setState({password})}
            />
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.loginBtn} onPress={this.onButtonLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity> */}
        <Tombol
          type="submit"
          title="Login"
          onPress={this.onButtonLogin}
          loading={loginLoading}
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.regisText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loginLoading: state.AuthReducer.loginLoading,
  loginResult: state.AuthReducer.loginResult,
  loginError: state.AuthReducer.loginError,
});

export default connect(mapStateToProps, null)(Login);

const styles = StyleSheet.create({
  page: {
    marginTop: 160,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  logo: {
    marginTop: 20,
    alignItems: 'center',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#BDBDBD',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgot: {
    color: 'black',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 20,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 40,
  },
  loginFaceBook: {
    width: '50%',
    backgroundColor: '#0288D1',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
  },
  regisText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  cardLogin: {
    backgroundColor: '#D6D2C4',
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  bgImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#45526C',
    marginBottom: 4,
    textAlign: 'center',
  },
});
