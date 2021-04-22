import {Cell} from '@/components'
import {useNavigation} from '@react-navigation/native'
import React, {useState, useEffect} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Switch,
  Text,
} from 'react-native'

const MainScreen = () => {
  const [search, setSearch] = useState('')
  const [isOnline, setIsOnline] = useState(true)
  const [filteredDataSource, setFilteredDataSource] = useState([])
  const [dataSource, setDataSource] = useState([])
  const {navigate} = useNavigation()

  useEffect(() => {
    //get Data from file json
    const customData = require('../../../data.json')
    if (customData) {
      setFilteredDataSource(customData?.data?.advisorProfileCollection?.items)
      setDataSource(customData?.data?.advisorProfileCollection?.items)
    }
  }, [])

  //update list with Online/Offline status
  useEffect(() => {
    searchFilterFunction('')
  }, [dataSource])

  //Change status and update list
  const toggleSwitch = () => {
    setIsOnline((previousState) => !previousState)
    searchFilterFunction('')
  }

  //Search Funtion
  //By Name, Categories Name, and Online/ Offline Status
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = dataSource?.filter(function (item) {
        let categories = item?.categoriesCollection?.items?.filter(function (
          category,
        ) {
          return (
            category?.displayName?.toUpperCase().indexOf(text.toUpperCase()) >
            -1
          )
        })
        return (
          (item?.displayName?.toUpperCase().indexOf(text.toUpperCase()) > -1 ||
            categories.length !== 0) &&
          item?.isOnline === isOnline.toString()
        )
      })
      setFilteredDataSource(newData)
      setSearch(text)
    } else {
      const newData = dataSource.filter(function (item) {
        return item?.isOnline === isOnline.toString()
      })
      setFilteredDataSource(newData)
      setSearch(text)
    }
  }

  //Function when click an item
  const getItem = (item) => {
    //go to detail screen
    navigate('Detail', {item})
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
          autoCapitalize="none"
        />
        <View style={styles.onOffView}>
          <Text style={styles.lbl}>Offline/Online: </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isOnline ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isOnline}
          />
        </View>

        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Cell item={item} getItem={getItem} />}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  onOffView: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  lbl: {
    fontSize: 16,
    paddingEnd: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
})

export default MainScreen
