import React from 'react';
import {Alert} from 'react-native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FIREBASE from '../../../config/FIREBASE';
import {clearStorage} from '../../../utils/LocalStorage';

const CardMenu = ({menu, navigation}) => {
  //LOGOUT dan Clear DATA
  const onSubmit = () => {
    if (menu.halaman === 'Login') {
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          clearStorage();
          Alert.alert('Anda Telah LogOut');
          navigation.replace('Login');
        })
        .catch(error => {
          // An error happened.
          alert(error);
        });
    } else {
      navigation.navigate(menu.halaman);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => onSubmit()}>
      <View style={styles.menu}>
        {menu.gambar}
        <Text style={styles.text}>{menu.nama}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
    backgroundColor: '#9D9D9D',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
