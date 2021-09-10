import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconAkun,
  IconAkunAktif,
  IconHome,
  IconHomeAktif,
  IconPesanan,
  IconPesananAktif,
} from '../../../assets';

const TopTabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'PulsaPage')
      return isFocused ? <IconHomeAktif /> : <IconHome />;

    if (label === 'PaketDataPage')
      return isFocused ? <IconPesananAktif /> : <IconPesanan />;

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      {/* <Icon /> */}
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TopTabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  text: isFocused => ({
    color: isFocused ? '#ffffff' : '#009688',
    fontSize: 20,
    marginTop: 4,
  }),
});
