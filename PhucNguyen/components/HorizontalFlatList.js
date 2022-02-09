import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

export const HorizontalFlatList = ({data}) => {
  const renderItemHorizontalList = (item, index) => {
    return (
      <View
        style={[
          styles.item,
          {backgroundColor: index % 2 === 0 ? 'white' : 'transparent'},
        ]}>
        <View style={{height: '20%', alignItems: 'center'}}>
          <Image
            source={{uri: item?.avatarUrl?.url}}
            style={{width: 90, height: 90, borderRadius: 5}}
          />
        </View>

        <View style={{height: '5%', paddingVertical: 5}}>
          <Text>{item.displayName}</Text>
        </View>

        <View style={styles.titleView}>
          <Text style={styles.title}>Categories</Text>
          <View>
            {item?.categoriesCollection?.items.map((item, index) => (
              <Text key={index}>{item.displayName}</Text>
            ))}
          </View>
        </View>

        <View style={styles.titleView}>
          <Text style={styles.title}>Skills</Text>
          <View>
            {item?.skillsCollection?.items.map((item, index) => (
              <Text key={index}>{item.displayName}</Text>
            ))}
          </View>
        </View>

        <View style={styles.titleView}>
          <Text style={styles.title}>Services</Text>
          <View style={{padding: 5}}>
            {item?.servicesCollection?.items.map((item, index) => (
              <Text key={index}>{item.name}</Text>
            ))}
          </View>
        </View>

        <View style={{height: '10%'}}>
          <Text style={styles.title}>Status</Text>
          <Text>{item.status}</Text>
        </View>
      </View>
    );
  };

  const NoItemDisplay = () => {
    return (
      <View>
        <Text>No data</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{height: SCREEN_HEIGHT * 0.6}}
        horizontal
        data={data}
        extraData={data}
        ListEmptyComponent={NoItemDisplay}
        renderItem={({item, index}) => renderItemHorizontalList(item, index)}
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
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    padding: 10,
    width: SCREEN_WIDTH * 0.5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 5,
  },
  titleView: {height: '17%', marginVertical: 5},
});
