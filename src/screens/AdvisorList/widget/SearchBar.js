import RESOURCES from '@assets';
import {scaleWidth} from '@utils';
import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SearchBar = ({
  value,
  onChange = () => {},
  clearValue = () => {},
  openModal = () => {},
}) => {
  return (
    <View style={[styles.container, styles.row]}>
      <View style={[styles.textInput, styles.row]}>
        <TextInput
          value={value}
          onChangeText={onChange}
          style={styles.input}
          placeholderTextColor={'#DFE5F6'}
          placeholder={'Search'}
        />
        {value.length !== 0 && (
          <TouchableOpacity onPress={clearValue}>
            <Image source={RESOURCES.icons.cancel} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity onPress={openModal}>
        <Image source={RESOURCES.icons.filter} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: scaleWidth(100),
    padding: scaleWidth(4),
    backgroundColor: '#DFE5F6',
    justifyContent: 'space-between',
    borderBottomRightRadius: scaleWidth(5),
    borderBottomLeftRadius: scaleWidth(5),
    marginBottom: scaleWidth(1),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '92%',
    padding: 0,
  },
  textInput: {
    width: '92%',
    height: scaleWidth(10),
    borderRadius: scaleWidth(5),
    paddingHorizontal: scaleWidth(2),
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
  },
  icon: {
    width: scaleWidth(5),
    height: scaleWidth(5),
    padding: scaleWidth(3),
  },
});
