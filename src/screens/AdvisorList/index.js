import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Header, SearchBar, ItemList, ModalFilter} from './widget';
import {useFilters} from './customHooks';

const index = () => {
  const [
    value,
    onChange,
    clearValue,
    advisorList,
    isVisible,
    openModal,
    closeModal,
  ] = useFilters();
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar
        value={value}
        onChange={onChange}
        clearValue={clearValue}
        openModal={openModal}
      />
      <ItemList advisorList={advisorList} />
      <ModalFilter isVisible={isVisible} closeModal={closeModal} />
    </View>
  );
};

export default index;
