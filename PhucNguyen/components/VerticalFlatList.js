import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

export const VerticalFlatList = ({data}) => {
  const renderItemVerticalList = (item, index) => {
    return (
      <View
        style={[
          styles.item,
          {backgroundColor: index % 2 === 0 ? 'white' : 'transparent'},
        ]}>
        <View style={{flex: 0.16, alignItems: 'center'}}>
          <Image
            source={{uri: item?.avatarUrl?.url}}
            style={{width: 42, height: 42, borderRadius: 5}}
          />
        </View>
        <View style={{flex: 0.16}}>
          <Text>{item.displayName}</Text>
        </View>
        <View style={{flex: 0.2}}>
          <View>
            {item?.categoriesCollection?.items.map((item, index) => (
              <Text key={index}>{item.displayName}</Text>
            ))}
          </View>
        </View>
        <View style={{flex: 0.12}}>
          <View>
            {item?.skillsCollection?.items.map((item, index) => (
              <Text key={index}>{item.displayName}</Text>
            ))}
          </View>
        </View>
        <View style={{flex: 0.16}}>
          <View>
            {item?.servicesCollection?.items.map((item, index) => (
              <Text key={index}>{item.name}</Text>
            ))}
          </View>
        </View>
        <View style={{flex: 0.16}}>
          <Text>{item.status}</Text>
        </View>
      </View>
    );
  };

  const VerticalListHeader = () => {
    return (
      <View style={styles.list}>
        <View style={{flex: 0.16, alignItems: 'center'}}>
          <Text style={styles.headerText}>Avatar</Text>
        </View>
        <View style={{flex: 0.16}}>
          <Text style={styles.headerText}>Name</Text>
        </View>
        <View style={{flex: 0.2}}>
          <Text style={styles.headerText}>Categories</Text>
        </View>
        <View style={{flex: 0.12}}>
          <Text style={styles.headerText}>Skills</Text>
        </View>
        <View style={{flex: 0.16}}>
          <Text style={styles.headerText}>Services</Text>
        </View>
        <View style={{flex: 0.16}}>
          <Text style={styles.headerText}>Status</Text>
        </View>
      </View>
    );
  };

  const NoItemDisplay = () => {
    return (
      <View style={styles.emptyList}>
        <Text>No data</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        extraData={data}
        ListEmptyComponent={NoItemDisplay}
        style={styles.flatList}
        ListHeaderComponent={VerticalListHeader}
        stickyHeaderIndices={[0]}
        renderItem={({item, index}) => renderItemVerticalList(item, index)}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {fontWeight: 'bold'},
  emptyList: {
    width: SCREEN_WIDTH - 10,
    alignItems: 'center',
    paddingTop: 20,
  },
  flatList: {height: SCREEN_HEIGHT * 0.6, flex: 1},
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SCREEN_WIDTH - 10,
    flex: 1,
    borderWidth: 1,
    paddingVertical: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SCREEN_WIDTH - 10,
    height: SCREEN_HEIGHT * 0.15,
    flex: 1,
    paddingVertical: 10,
  },
});
