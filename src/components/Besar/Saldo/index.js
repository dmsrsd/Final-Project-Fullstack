import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import ButtonIcon from '../../Kecil/ButtonIcon';
import Gap from '../Gap';

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.informasiSaldo}>
        <View style={styles.text}>
          <Text style={styles.labelSaldo}>Upgrade to Premium</Text>
          <Text style={styles.nilaiSaldo}></Text>
        </View>
        <View style={styles.wartopPoin}>
          <View style={styles.text}>
            <Text style={styles.labelPoin}>Dapatkan Penawaran Special</Text>
            {/* <Text style={styles.nilaiPoin}>100 Poin</Text> */}
          </View>
        </View>
      </View>
      <View style={styles.buttonAksi}>
        <ButtonIcon title="Upgrade" />
        {/* <ButtonIcon title="Add Saldo" /> */}
        <Gap width={10} />
      </View>
    </View>
  );
};

export default Saldo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDEDED',
    padding: 17,
    marginHorizontal: 30,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
    marginTop: -windowHeight * 0.06,
    flexDirection: 'row',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  informasiSaldo: {
    width: '60%',
  },
  labelSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
    fontWeight: 'bold',
    color: '#FFA900',
    marginLeft: 25,
  },
  nilaiSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  },
  labelPoin: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Regular',
    marginLeft: 25,
    fontWeight: 'bold',
  },
  nilaiPoin: {
    fontSize: 15,
    marginRight: 3,
    color: '#009688',
  },
  buttonAksi: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
});
