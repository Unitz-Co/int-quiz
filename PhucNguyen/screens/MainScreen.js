import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import * as initData from '../data.json';
import {HorizontalFlatList} from '../components/HorizontalFlatList';
import {VerticalFlatList} from '../components/VerticalFlatList';

export const MainScreen = () => {
  const [data, setData] = useState(
    initData.data.advisorProfileCollection.items,
  );
  const [text, setText] = useState('');
  const [isOnline, setIsOnline] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  const onTextChange = val => {
    val ? setText(val) : setText('');
    setIsOffline(false);
    setIsOnline(false);
    setData(initData.data.advisorProfileCollection.items);
  };

  const onSearch = () => {
    if (text) {
      let keyWord = text;
      keyWord = keyWord.split(' ');
      // search for display name
      let result = data.filter(item =>
        keyWord.every(
          el =>
            el && item.displayName.toLowerCase().indexOf(el.toLowerCase()) > -1,
        ),
      );

      // get result by category
      let resultCate = [];
      data.forEach(element => {
        let isMatch = false;
        element.categoriesCollection.items.forEach(item => {
          // search in Category | sub-item
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

      // apply status online | offline
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

      // combine the filtered results (name & category)
      if (resultCate.length > 0) {
        result.length > 0 && resultCate.push(result);
        setData(resultCate);
      }

      // not find any category -> set result by filtered name
      else {
        setData(result);
      }
    }

    // press search without key word but there's a checked status
    else if (isOffline || isOnline) {
      if (isOnline) {
        let result = data.filter(item =>
          item.status.toLowerCase().includes('online'),
        );
        setData(result);
      } else {
        let result = data.filter(item =>
          item.status.toLowerCase().includes('offline'),
        );
        setData(result);
      }
    }
  };

  const onCheckStatus = status => {
    if (status === 'online') {
      setIsOffline(false);
      setIsOnline(!isOnline);
    } else {
      setIsOnline(false);
      setIsOffline(!isOffline);
    }
    // reset data
    setData(initData.data.advisorProfileCollection.items);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column'}}>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchInput}
            onChangeText={val => onTextChange(val)}
            value={text}
            placeholder="Search by name or category"
          />
          <TouchableOpacity
            style={styles.touchableOpacitySearch}
            onPress={onSearch}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statusSection}>
          <View style={styles.checkBoxSection}>
            <CheckBox
              disabled={false}
              value={isOnline}
              onValueChange={() => onCheckStatus('online')}
              style={{marginHorizontal: 10}}
            />
            <Text>Online</Text>
          </View>
          <View style={styles.checkBoxSection}>
            <CheckBox
              disabled={false}
              value={isOffline}
              style={{marginHorizontal: 10}}
              onValueChange={() => onCheckStatus('offline')}
            />
            <Text>Offline</Text>
          </View>
        </View>
      </View>

      <Text style={styles.listTitle}>Vertical List</Text>
      <VerticalFlatList data={data} />

      <Text style={styles.listTitle}>Horizontal List</Text>
      <HorizontalFlatList data={data} />
    </View>
  );
};

const SCREEN_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchSection: {
    width: SCREEN_WIDTH - 10,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    width: SCREEN_WIDTH * 0.75,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  touchableOpacitySearch: {
    height: 50,
    alignItems: 'center',
    padding: 4,
    width: SCREEN_WIDTH * 0.2,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  statusSection: {
    flexDirection: 'row',
    width: SCREEN_WIDTH - 10,
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  checkBoxSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listTitle: {fontSize: 16, fontWeight: 'bold', marginVertical: 30},
});
