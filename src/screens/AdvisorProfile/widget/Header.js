import RESOURCES from '@assets';
import NavigationService from '@navigations/NavigationService';
import {scaleHeight, scaleWidth} from '@utils';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const Header = () => {
  const back = () => {
    NavigationService.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Advisor Profile</Text>
      <ButtonBack onPress={back} />
    </View>
  );
};

const ButtonBack = ({onPress = () => {}}) => (
  <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.btnBack}>
    <Image source={RESOURCES.icons.arrowLeft} style={styles.iconBack} />
  </TouchableOpacity>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    width: scaleWidth(100),
    paddingVertical: scaleWidth(5),
    backgroundColor: '#DFE5F6',
  },
  title: {
    textAlign: 'center',
    fontSize: scaleWidth(5),
    color: '#000000',
    fontWeight: 'bold',
  },
  iconBack: {
    tintColor: '#000000',
  },
  btnBack: {
    position: 'absolute',
    top: scaleWidth(6),
    left: scaleWidth(5),
    width: scaleWidth(10),
    height: scaleWidth(10),
  },
});
