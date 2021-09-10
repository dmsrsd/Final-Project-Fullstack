import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import ButtonLoading from './ButtonLoading';
import ButtonSubmit from './ButtonSubmit';

const Tombol = props => {
  const {loading, onPress, padding, type} = props;

  if (loading) {
    return <ButtonLoading {...props} />;
  }

  if (type === 'submit') {
    return <ButtonSubmit {...props} />;
  }

  return (
    <TouchableOpacity
      style={styles.container(padding)}
      onPress={onPress}></TouchableOpacity>
  );
};

export default Tombol;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: 'white',
    padding: padding,
    borderRadius: 5,
  }),
});
