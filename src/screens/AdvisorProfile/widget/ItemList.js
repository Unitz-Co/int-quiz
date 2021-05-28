import {scaleWidth} from '@utils';
import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const ItemList = ({list, title}) => {
  return (
    <View style={styles.container}>
      <Header title={title} />
      <FlatList
        data={list}
        horizontal
        showsHorizontalScrollIndicator={false}
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
  const {displayName, avatarUrl, name} = item;
  return (
    <View style={styles.items}>
      {avatarUrl && (
        <Image style={styles.avatar} source={{uri: avatarUrl.url}} />
      )}
      <Text style={styles.displayName}>{displayName || name}</Text>
    </View>
  );
};

const Header = ({title}) => {
  return <Text style={styles.header}>{title || ''}</Text>;
};

export default ItemList;

const styles = StyleSheet.create({
  container: {},
  items: {
    height: scaleWidth(20),
    padding: scaleWidth(2),
    borderRadius: scaleWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scaleWidth(4),
    backgroundColor: '#DFE5F6',
  },
  displayName: {
    fontSize: scaleWidth(3.5),
    padding: scaleWidth(2),
  },
  avatar: {
    width: scaleWidth(16),
    height: scaleWidth(16),
    borderRadius: scaleWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BBB',
  },
  header: {
    fontSize: scaleWidth(6),
    fontWeight: 'bold',
    color: '#FF6633',
    padding: scaleWidth(2),
  },
});
