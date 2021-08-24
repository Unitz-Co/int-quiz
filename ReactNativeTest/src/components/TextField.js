import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const TextField = props => {
  const {containerStyle, renderPrefix, inputProps} = props;

  return (
    <View style={[containerStyle]}>
      <View style={styles.contain}>
        {renderPrefix && renderPrefix()}
        <View style={styles.padding} />
        <TextInput
          {...inputProps}
          style={[styles.inputStyle, inputProps?.style]}
        />
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  padding: {
    width: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold'
  },
  line: {
    height: 1,
    backgroundColor: '#d9d9d9',
    width: '100%',
  },
  contain: {
    flexDirection: 'row',
  },
});

export default React.memo(TextField);
