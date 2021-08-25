import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  FlatList,
  ScrollView,
} from 'react-native';
import {styles} from './Filter.styles';
import {FilterLogic} from './Filter.logic';
import {Header, Card, TextField, Modal} from '../../components';
import {LANDSCAPE} from 'react-native-orientation-locker';

const _FilterScreen = props => {
  const {
    _onPressBackButton,
    selectCategoryList,
    onlineStatus,
    _switchOnline,
    _onChangeName,
    name,
    _closeModalStatusOnline,
    showModalStatusOnline,
    _onShowModalStatusOnline,
    showModalCategory,
    _closeModalCategory,
    _onShowModalCategory,
    dataCategory,
    _chooseCategory,
    displayCategoryListText,
    onSave,
    onReset,
    orientation,
  } = FilterLogic(props);

  const _renderItemCategory = ({item}) => {
    const selected = selectCategoryList.some(
      cate => cate.sys.id == item.sys.id,
    );
    return (
      <TouchableOpacity
        onPress={_chooseCategory(item)}
        style={[styles.itemCategory, selected && styles.backgroundSelected]}>
        <Text>{item.displayName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header title={'Filter'} onPressBackButton={_onPressBackButton} />
      <Card style={styles.cardDefault}>
        <TextField
          containerStyle={styles.input}
          inputProps={{
            placeholder: 'Name',
            onChangeText: _onChangeName,
            value: name,
          }}
        />
        <TouchableOpacity
          onPress={_onShowModalCategory}
          style={styles.btnSelectCategory}>
          <Text
            numberOfLines={2}
            style={[
              styles.txtCategory,
              !selectCategoryList.length && styles.txtCategoryPlaceholder,
            ]}>
            {!!selectCategoryList.length
              ? displayCategoryListText
              : 'Choose category'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_onShowModalStatusOnline}
          style={styles.btnSelectOnlineOffline}>
          <Text style={styles.txtOnlineOffline}>
            {onlineStatus != undefined
              ? onlineStatus
                ? 'Online'
                : 'Offline'
              : 'Online and Offline'}
          </Text>
        </TouchableOpacity>
      </Card>
      <View style={styles.groupBtn}>
        <TouchableOpacity onPress={onReset} style={styles.btnReset}>
          <Text>RESET</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSave} style={styles.btnSave}>
          <Text style={styles.txtSaveBtn}>SAVE</Text>
        </TouchableOpacity>
      </View>

      {/* Modal Online Status */}
      <Modal
        isOpen={showModalStatusOnline}
        style={[
          styles.modalStyleStatus,
          orientation == LANDSCAPE && {height: '40%'},
        ]}
        onPressClose={_closeModalStatusOnline}
        onClosed={_closeModalStatusOnline}
        title={'Select Online Status'}>
        <ScrollView>
          <TouchableOpacity
            onPress={_switchOnline(undefined)}
            style={[
              styles.btnItemOnlineOffline,
              onlineStatus === undefined && styles.backgroundSelected,
            ]}>
            <Text>Online and Offline</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_switchOnline(true)}
            style={[
              styles.btnItemOnlineOffline,
              onlineStatus === true && styles.backgroundSelected,
            ]}>
            <Text>Online</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_switchOnline(false)}
            style={[
              styles.btnItemOnlineOffline,
              onlineStatus === false && styles.backgroundSelected,
            ]}>
            <Text>Offline</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>

      {/* Modal Category */}
      <Modal
        isOpen={showModalCategory}
        title={'Select category'}
        style={[
          styles.modalStyleCategory,
          orientation == LANDSCAPE && {height: '55%'},
        ]}
        onPressClose={_closeModalCategory}
        onClosed={_closeModalCategory}>
        <FlatList data={dataCategory} renderItem={_renderItemCategory} />
      </Modal>
    </View>
  );
};

export const FilterScreen = React.memo(_FilterScreen);
