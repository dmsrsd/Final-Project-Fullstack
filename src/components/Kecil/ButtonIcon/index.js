import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconAddSaldo,
  IconGetPoin,
  IconTelkomsel,
  IconXL,
  IconIndosat,
  IconSmartFren,
  IconUpgrade,
} from '../../../assets';
import {WARNA_SEKUNDER} from '../../../utils/constant';

const ButtonIcon = ({title, type}) => {
  const Icon = () => {
    if (title === 'Add Saldo') return <IconAddSaldo />;

    if (title === 'Get Poin') return <IconGetPoin />;

    if (title === 'Upgrade') return <IconUpgrade />;

    if (title === 'Telkomsel') return <IconTelkomsel />;

    if (title === 'Indosat') return <IconIndosat />;

    if (title === 'XL') return <IconXL />;

    if (title === 'Smartfren') return <IconSmartFren />;

    return <IconAddSaldo />;
  };

  return (
    <TouchableOpacity>
      <View style={styles.buttonIcon(type)}>
        <Icon />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  buttonIcon: type => ({
    backgroundColor: 'white',
    padding: type === 'layanan' ? 12 : 7,
    borderRadius: 10,
  }),
  text: {
    fontSize: 10,
    fontFamily: 'TitilliumWeb-Regular',
    textAlign: 'center',
  },
});
