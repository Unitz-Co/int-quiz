import {Cell} from '@/components'
import React from 'react'
import {SafeAreaView, StyleSheet, Text, FlatList} from 'react-native'

const DetailScreen = (props) => {
  const {route} = props
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.lbl}>Name: {route?.params?.item?.displayName}</Text>
      <FlatList
        data={route?.params?.item?.categoriesCollection?.items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Cell item={item} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lbl: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
})

export default DetailScreen
