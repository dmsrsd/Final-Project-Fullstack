import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Animated,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  photo,
  profile,
  home,
  search,
  notifications,
  settings,
  logout,
  close,
  menu,
  fotoProfil,
  history,
  smartphone,
} from '../../aseets2';
import {FotoAkun} from '../../assets';

export default function Akun() {
  const [currentTab, setCurrentTab] = useState('Hello !');
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'flex-start', padding: 15}}>
        <Image
          source={FotoAkun}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 8,
          }}></Image>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 20,
          }}>
          PROFILE
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
          <Text
            style={{
              marginTop: 6,
              color: 'white',
            }}>
            View Profile
          </Text>
        </TouchableOpacity>
        <View style={{flexGrow: 1, marginTop: 50}}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, 'My Wartop', smartphone)}
          {TabButton(currentTab, setCurrentTab, 'Search', search)}
          {TabButton(currentTab, setCurrentTab, 'History Pembelian', history)}
          {TabButton(currentTab, setCurrentTab, 'Settings', settings)}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image
              source={logout}
              style={{
                width: 25,
                height: 25,
                marginTop: 150,
                marginLeft: 25,
                tintColor: 'white',
              }}
            />
            <Text logout style={styles.buttonLogout}>
              LogOut
            </Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity>
          {TabButton(currentTab, setCurrentTab, 'LogOut', logout)}
        </TouchableOpacity> */}
      </View>

      {
        // Over lay View...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: '#009ee8',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}>
          <TouchableOpacity
            onPress={() => {
              // Do Actions Here....
              // Scaling the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}>
            <Image
              source={showMenu ? close : menu}
              style={{
                width: 20,
                height: 20,
                tintColor: 'black',
                marginTop: 40,
              }}></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              paddingTop: 20,
            }}>
            {currentTab}
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              paddingTop: 15,
              paddingBottom: 5,
            }}>
            Sobat Wartop
          </Text>

          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Selamat Datang Di Halaman Akun
          </Text>

          <Image
            // source={fotoProfil}
            style={{
              width: '100%',
              height: 350,
              borderRadius: 15,
              marginTop: 25,
            }}></Image>

          {/* <BannerSlider /> */}
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == 'LogOut') {
        } else {
          setCurrentTab(title);
        }
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}>
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? '#5359D1' : 'white',
          }}></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? '#5359D1' : 'white',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  buttonLogout: {
    marginLeft: 66,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginTop: -26,
  },
  bgImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});
