/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import Header from '../AppTest/src/component/header';
import data from './data.json';
import { styles } from './src/util/styles';
import FieldInfo from './src/component/fieldInfo';
import Section from './src/component/section';

const App: () => Node = () => {
  const [view, setView] = useState(1);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const userInfo = data?.data?.advisorProfileCollection?.items;
  const dataRender = userInfo?.filter((e) => (e?.displayName.includes(search) || e?.categoriesCollection?.items?.find((e) => e?.displayName.includes(search))) && e?.static.includes(status))
  const total = dataRender?.length;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
      <Header
        setSearch={setSearch}
        setView={setView}
        total={total}
        setStatus={setStatus}
      />
      <ScrollView horizontal={view !== 1}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.body}>
        <View style={[view === 1 ? styles.verticalView : styles.horizontalView]}>
          {
            dataRender?.map((item,index) => {
              const categories = item?.categoriesCollection?.items;
              const skill = item?.skillsCollection?.items;
              const service = item?.servicesCollection?.items;
              return <View style={[styles.infoStyle, {marginHorizontal: 8}]} key={index}>
                <View style={styles.headerInfo}>
                  <Image
                    source={{uri: item?.avatarUrl?.url || 'http://cntt.gov.vn/Style%20Library/themes/cuccntt/images/organs/no-avatar.jpg'}}
                    style={styles.image} />
                  <View style={styles.wrapperStyle}>
                    <FieldInfo field="Tên:" value={item?.displayName} />
                    <FieldInfo field="Email:" value={item?.email} />
                    <FieldInfo field="SĐT:" value={item?.phone} />
                  </View>
                </View>
                <Section title="Danh mục" data={categories} field="displayName" />
                <Section title="Kỹ năng" data={skill} field="displayName" />
                <Section title="Dịch vụ" data={service} field="name" />
              </View>
            })
          }
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
