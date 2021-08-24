import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {shadowStyle} from '../utils/shadow';

const Card = props => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={
        props.activeOpacity ?? (props.onPress || props.onLongPress ? 0.8 : 1)
      }
      style={[styles.container, props.style]}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    ...shadowStyle(3),
  },
});

export default React.memo(Card);
