import {scaleHeight, scaleWidth} from '@utils';
import React from 'react';
import NavigationService from '@navigations/NavigationService';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {ScreenName} from '@screens';

const ItemList = ({advisorList}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={advisorList}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.5}
        removeClippedSubviews={true}
        initialNumToRender={20}
        maxToRenderPerBatch={5}
        renderItem={({item, index}) => <Items item={item} />}
      />
    </View>
  );
};

const Items = ({item}) => {
  const {displayName, avatarUrl, isActive} = item;

  const goToAdvisorProfile = () => {
    NavigationService.navigate(ScreenName.AdvisorProfile, {item: item});
  };

  return (
    <TouchableOpacity style={styles.items} onPress={goToAdvisorProfile}>
      {avatarUrl ? (
        <Image style={styles.avatar} source={{uri: avatarUrl.url}} />
      ) : (
        <Avatar displayName={displayName} />
      )}
      <Text style={styles.displayName}>{displayName || ''}</Text>
      <Status isActive={isActive} />
    </TouchableOpacity>
  );
};

const Avatar = ({displayName}) => {
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

const Status = ({isActive}) => {
  return <View style={styles.status(isActive)} />;
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  items: {
    width: scaleWidth(92),
    padding: scaleWidth(2),
    borderRadius: scaleWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scaleWidth(2),
    marginHorizontal: scaleWidth(4),
    backgroundColor: '#DFE5F6',
  },
  displayName: {
    marginLeft: scaleWidth(4),
    fontSize: scaleWidth(3.5),
  },

  avatar: {
    width: scaleWidth(12),
    height: scaleWidth(12),
    borderRadius: scaleWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BBB',
  },

  defaultName: {
    fontSize: scaleWidth(6),
    fontWeight: 'bold',
    color: '#FFF',
  },
  status: isActive => {
    return {
      width: scaleWidth(4),
      height: scaleWidth(4),
      borderRadius: scaleWidth(4),
      borderColor: '#FFF',
      borderWidth: scaleWidth(0.5),
      backgroundColor: isActive ? '#00FF00' : '#BBB',

      position: 'absolute',
      bottom: scaleWidth(1),
      left: scaleWidth(10),
    };
  },
});
