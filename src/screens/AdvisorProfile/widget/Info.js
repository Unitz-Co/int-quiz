import {scaleWidth} from '@utils';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Info = ({info}) => {
  const {displayName, phone, email, avatarUrl} = info;
  return (
    <View style={styles.container}>
      {avatarUrl ? (
        <Image style={styles.avatar} source={{uri: avatarUrl.url}} />
      ) : (
        <Avatar displayName={displayName} />
      )}
      <View style={styles.info}>
        <Text style={styles.title}>Name: {displayName || '******'}</Text>
        <Text style={styles.title}>Phone: {phone || '******'}</Text>
        <Text style={styles.title}>Email: {email || '******'}</Text>
      </View>
    </View>
  );
};

const Avatar = ({displayName, avatarUrl}) => {
  const color = ['#9933FF', '#FF3333', '#FF6633', '#FFCC00', '#00CCFF'];

  const randomColor = () => {
    return color[Math.floor(Math.random() * color.length)];
  };

  const defaultName = () => {
    return (displayName || 'Default').substring(0, 1).toUpperCase();
  };

  return (
    <View style={[styles.avatar, {backgroundColor: randomColor()}]}>
      <Text style={styles.defaultName}>{defaultName()}</Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    width: scaleWidth(100),
    backgroundColor: '#DFE5F6',
    flexDirection: 'row',
    alignItems: 'center',

    padding: scaleWidth(5),
    borderBottomRightRadius: scaleWidth(5),
    borderBottomLeftRadius: scaleWidth(5),
  },
  avatar: {
    backgroundColor: '#FFF',
    width: scaleWidth(25),
    height: scaleWidth(25),
    borderRadius: scaleWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    paddingHorizontal: scaleWidth(5),
  },
  defaultName: {
    fontSize: scaleWidth(16),
    fontWeight: 'bold',
    color: '#FFF',
  },
});
