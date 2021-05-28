import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import {Header, Info, ItemList} from './widget';

const index = props => {
  const info = props?.route?.params?.item || {};
  return (
    <View style={styles.container}>
      <Header />
      <Info info={info} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ItemList
          list={info?.categoriesCollection?.items || []}
          title={'Categories Collection'}
        />
        <ItemList
          list={info?.skillsCollection?.items || []}
          title={'Skills Collection'}
        />
        <ItemList
          list={info?.servicesCollection?.items || []}
          title={'Services Collection'}
        />
      </ScrollView>
    </View>
  );
};

export default index;
