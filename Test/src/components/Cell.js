import {IC_USER} from '@/assets'
import React from 'react'
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native'

const Cell = (props) => {
  const {item, getItem} = props
  return (
    <TouchableOpacity onPress={() => getItem && getItem(item)}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={
              item?.avatarUrl?.url ? {uri: item?.avatarUrl?.url} : IC_USER
            }
          />
        </View>
        <Text style={styles.lbl}>{item?.displayName}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  lbl: {
    paddingHorizontal: 10,
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
})

export {Cell}
