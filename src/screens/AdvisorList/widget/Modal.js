import RESOURCES from '@assets';
import {scaleHeight, scaleWidth} from '@utils';
import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Modal,
} from 'react-native';

const ModalFilter = ({isVisible, closeModal, setFilter = () => {}}) => {
  const handleFilter = value => {
    // setFilter(value);
    closeModal(value);
  };
  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.container}>
        <View style={styles.body}>
          <TouchableOpacity style={styles.btn} onPress={() => handleFilter(0)}>
            <View style={[styles.status, {backgroundColor: '#FFF'}]} />
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handleFilter(1)}>
            <View style={styles.status} />
            <Text>Online</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, {borderColor: 'transparent'}]}
            onPress={() => handleFilter(2)}>
            <View style={[styles.status, {backgroundColor: '#BBB'}]} />
            <Text>Offline</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  body: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(1),
    backgroundColor: '#FFF',
  },
  btn: {
    width: '100%',
    height: '33.33%',
    borderBottomWidth: 0.5,
    borderColor: '#BBB',
    flexDirection: 'row',
    alignItems: 'center',
    padding: scaleWidth(2),
  },
  status: {
    width: scaleWidth(4),
    height: scaleWidth(4),
    borderRadius: scaleWidth(4),
    borderColor: '#FFF',
    borderWidth: scaleWidth(0.5),
    backgroundColor: '#00FF00',
    marginRight: scaleWidth(2),
  },
});
