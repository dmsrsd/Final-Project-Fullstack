import React, {Component} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {ImageHeader, LogoText} from '../../assets/images';
import {BannerSlider, ButtonIcon, Saldo} from '../../components';
import {connect} from 'react-redux';
import {getData} from '../../utils';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: false,
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      console.log('TEST ComponentDidMout Screen Home !!!');
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
        this.props.navigation.replace('MainApp');
      }
    });
  };

  render() {
    const {profile} = this.state;
    // console.log('DATA USER', this.state.profile);
    return (
      <View style={styles.page}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <Image source={LogoText} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={styles.selamat}>Selamat Datang,</Text>
            <Text style={styles.nama}>{profile.nama}</Text>
            <Text style={styles.nomorHp}>{profile.nomorHp}</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.layanan}>
          <Text style={styles.label}>Pilih Produk :</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title="Telkomsel" type="layanan" />
            <ButtonIcon title="Indosat" type="layanan" />
            <ButtonIcon title="XL" type="layanan" />
            <ButtonIcon title="Smartfren" type="layanan" />
          </View>
        </View>
        <BannerSlider />
      </View>
    );
  }
}

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // backgroundColor: '#00796B',
    backgroundColor: '#F5F5F5',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.32,
    paddingHorizontal: 30,
    paddingTop: 35,
  },
  logo: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.05,
  },
  hello: {
    marginTop: windowHeight * 0.02,
  },
  selamat: {
    fontSize: 23,
    fontFamily: 'TitilliumWeb-Regular',
  },
  nama: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  },
  nomorHp: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  },
  layanan: {
    paddingHorizontal: 30,
    paddingTop: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
    // color: 'white',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
});
