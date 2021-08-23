import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Header} from '../components';
import {IconSVG} from '../assets/iconSvg';

const Home = props => {
  const _onPressFilter = () => props.navigation.navigate('Filter');

  const _renderButtonRight = () => {
    return (
      <TouchableOpacity onPress={_onPressFilter} style={styles.filterBtn}>
        <IconSVG.Filter width={24} height={24} color={'#333'} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Home'}
        renderButtonRight={_renderButtonRight}
        hideBackButton={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  filterBtn: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(Home);
