import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonSubmit = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonSubmit} onPress={onPress}>
      <Text style={styles.textSubmit}>Next</Text>
    </TouchableOpacity>
  );
};

export default ButtonSubmit;

const styles = StyleSheet.create({
  buttonSubmit: {
    marginHorizontal: 70,
    backgroundColor: '#3DB2FF',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingBottom: 15,
    marginTop: 85,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSubmit: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
