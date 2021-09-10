import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {WARNA_UTAMA, WARNA_DISABLE} from '../../../utils/constant';
import {
  IconAkun,
  IconAkunAktif,
  IconHome,
  IconHomeAktif,
  IconPesanan,
  IconPesananAktif,
} from '../../../assets';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <IconHomeAktif /> : <IconHome />;

    if (label === 'TopUp')
      return isFocused ? <IconPesananAktif /> : <IconPesanan />;

    if (label === 'Akun') return isFocused ? <IconAkunAktif /> : <IconAkun />;

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 14,
    color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
    marginTop: 5,
  }),
});
