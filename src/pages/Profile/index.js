import React, {Component} from 'react';

import {Text, StyleSheet, View, Image} from 'react-native';
import {FotoDefault, LoginWallpaper} from '../../assets';
import {ListMenu} from '../../components/';
import {dummyProfile, dummyMenu} from '../../data';
import {getData} from '../../utils/LocalStorage';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: false,
      menus: dummyMenu,
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      console.log('TEST ComponentDidMout Running on Profile Screen');
      this.getUserData();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res;
      if (data) {
        this.setState({
          profile: data,
        });
      } else {
        this.props.navigation.replace('Login');
      }
    });
  };

  onButtonPressed = () => {
    this.props.navigation.navigate('MainApp');
  };

  render() {
    const {profile, menus} = this.state;
    // console.log('DATA PROFILE', this.state.profile);
    return (
      <View style={styles.page}>
        <Image
          source={LoginWallpaper}
          style={{
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}></Image>
        {/* <Image
          style={styles.bgImage}
          source={{
            uri: 'https://image.freepik.com/free-photo/dual-yellow-blue-background-writing-text_23-2147981648.jpg',
          }}
        /> */}
        <View style={styles.container}>
          <Image
            source={profile.avatar ? {uri: profile.avatar} : FotoDefault}
            style={styles.foto}
          />
          <View style={styles.profile}>
            <Text style={styles.nama}>{profile.nama}</Text>
            <Text style={styles.info}>{profile.nomorHp}</Text>
            <Text style={styles.info}>{profile.email}</Text>
          </View>

          <ListMenu menus={menus} navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#009688',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: 600,
    width: '100%',
    backgroundColor: 'transparent',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 80,
    alignSelf: 'center',
    marginTop: -75,
    backgroundColor: 'grey',
  },
  profile: {
    marginTop: 10,
    alignItems: 'center',
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  info: {
    fontWeight: 'normal',
    fontSize: 20,
    color: 'black',
  },
  back: {
    marginTop: 600,
    marginVertical: 30,
    padding: 15,
    fontSize: 20,
  },
  bgImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});
