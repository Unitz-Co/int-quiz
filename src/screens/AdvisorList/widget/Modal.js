import {scaleWidth} from '@utils';
import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PanResponder,
} from 'react-native';

const ModalFilter = ({isVisible, closeModal}) => {
  const handleFilter = value => {
    closeModal(value);
  };

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        if (evt.nativeEvent.locationX === evt.nativeEvent.pageX) {
          closeModal();
        }
      },
    }),
  ).current;

  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.container} {...panResponder.panHandlers}>
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
    borderRadius: scaleWidth(1.5),
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
