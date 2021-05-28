import { scaleHeight, scaleWidth } from '@utils';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADVISOR LIST</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: scaleWidth(100),
    paddingVertical: scaleHeight(12),
    backgroundColor: '#DFE5F6',
  },
  title: {
    textAlign: 'center',
    fontSize: scaleWidth(5),
    color: '#000000',
    fontWeight: 'bold',
  },
});
