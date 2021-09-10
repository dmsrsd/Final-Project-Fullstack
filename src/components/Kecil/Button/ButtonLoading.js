import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ButtonLoading = ({padding, fontSize}) => {
  return (
    <TouchableOpacity style={styles.container(padding)}>
      <ActivityIndicator size="large" color="#FFFFFF" />
      <Text style={styles.title(fontSize)}>Loading...</Text>
    </TouchableOpacity>
  );
};

export default ButtonLoading;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: '#3DB2FF',
    padding: padding,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: fontSize => ({
    color: 'white',
    fontSize: fontSize ? fontSize : 15,
  }),
});
