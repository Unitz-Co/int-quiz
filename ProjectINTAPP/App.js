

import React, { useState, useEffect, } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import * as initData from './data.json';
import CheckBox from '@react-native-community/checkbox';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [data, setData] = useState(
    initData.data.advisorProfileCollection.items,
  );
  const [text, setText] = useState('');
  const [isOnline, setIsOnline] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  console.log(data);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onTextChange = val => {
    val ? setText(val) : setText('');
    setIsOffline(false);
    setIsOnline(false);
    setData(data);
  };
  const onSearch = () => {
    if (text) {
      let keyWord = text;
      keyWord = keyWord.split(' ');
      let result = data.filter(item =>
        keyWord.every(
          el =>
            el && item.displayName.toLowerCase().indexOf(el.toLowerCase()) > -1,
        ),
      );
      let resultCate = [];
      data.forEach(element => {
        let isMatch = false;
        element.categoriesCollection.items.forEach(item => {

          let checkCate = keyWord.every(
            el => item.displayName.toLowerCase().indexOf(el.toLowerCase()) > -1,
          );
          checkCate ? (isMatch = true) : (isMatch = false);
        });
        if (isMatch) {
          resultCate.push(element);
          isMatch = false;
        }
      });
      if (isOffline || isOnline) {
        if (isOnline) {
          result = result.filter(item =>
            item.status.toLowerCase().includes('online'),
          );
          resultCate = resultCate.filter(item =>
            item.status.toLowerCase().includes('online'),
          );
        } else {
          result = result.filter(item =>
            item.status.toLowerCase().includes('offline'),
          );
          resultCate = resultCate.filter(item =>
            item.status.toLowerCase().includes('offline'),
          );
        }
      }
      if (resultCate.length > 0) {
        result.length > 0 && resultCate.push(result);
        setData(resultCate);
      }
      else {
        setData(result);
      }
    }


  };

  function renderItem(item, index) {
    return (
      <View style={{ ...styles.styContain }}>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.profileImage}>
            <Image
              source={{ uri: item?.avatarUrl?.url }}
              style={{
                flex: 1,
                height: undefined,
                width: undefined,
              }}
              resizeMode="cover"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{item.displayName}</Text>
          </View>
          <Text>{item.status}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>

          <View>
            <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Dịch vụ</Text>
            {item?.servicesCollection?.items.map((item, index) => (
              <Text key={index}>{item.name}</Text>
            ))}
          </View>
          <View>
            <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Kĩ Năng</Text>
            {item?.skillsCollection?.items.map((item, index) => (
              <Text key={index}>{item.displayName}</Text>
            ))}
          </View>
          <View>
            <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Thể Loại</Text>
            {item?.categoriesCollection?.items.map((item, index) => (
              <Text key={index}>{item.displayName}</Text>
            ))}
          </View>
        </View>

      </View>
    )
  }
  const onCheckStatus = status => {
    if (status === 'online') {
      setIsOnline(false);
      setIsOnline(!isOnline);
    } else {
      setIsOffline(false);
      setIsOffline(!isOffline);
    }
    // reset data
    setData(initData.data.advisorProfileCollection.items);
  };
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.searchSection}>
        <TextInput
          style={[styles.textInputStyle]}
          placeholder={"Seach Tên"}
          onChangeText={val => onTextChange(val)}
          value={text}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
        />

        <TouchableOpacity
          onPress={onSearch}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
        <View>
          <CheckBox
            disabled={false}
            value={isOnline}
            onValueChange={() => onCheckStatus('online')}
            style={{ marginHorizontal: 10 }}
          />
          <Text>Online</Text>
        </View>

        <View>
          <CheckBox
            disabled={false}
            value={isOffline}
            style={{ marginHorizontal: 10 }}
            onValueChange={() => onCheckStatus('offline')}
          />
          <Text>Offline</Text>
        </View>

      </View>

      <FlatList
        data={data}
        extraData={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => renderItem(item, index)}
        onEndReachedThreshold={0}
        contentContainerStyle={{ paddingVertical: 20 }}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffff',
    marginVertical: 8,
    marginHorizontal: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    //borderColor: Colors.gray_5,
    borderWidth: 0.5,
  },
  textInputStyle: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 8,
    paddingBottom: 10,
    paddingLeft: 0,
    // backgroundColor: Colors.gray_4,
    marginLeft: 8,
  },
  styContain: {
    margin: 15,
    //marginTop: 8,
    padding: 10,
    borderRadius: 30,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  profileImage: {
    ...Platform.select({
      ios: {
        width: 70,
        height: 70,
        borderRadius: 30,
        overflow: 'hidden',
        //marginTop: Size.defineSpace * 2,
        borderColor: Colors.blue,

      },
      android: {
        width: 70,
        height: 70,
        maxHeight: 200,
        maxWidth: 200,
        borderRadius: 30,
        overflow: 'hidden',
        borderColor: Colors.blue,
        //marginTop: Size.defineSpace * 2,
      },

    }),
  },

});

export default App;
