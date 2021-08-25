import React from 'react';
import {Keyboard} from 'react-native';
import data from '../../constant/data.json';
import lodash from 'lodash';
import {ContextApp} from '../../constant/App';

export const FilterLogic = props => {
  const contextData = React.useContext(ContextApp);

  const dataCategory = React.useMemo(() => {
    return lodash
      .chain(data.data.advisorProfileCollection.items)
      .map(advisor => advisor.categoriesCollection.items)
      .flatten()
      .uniqBy('sys.id')
      .value();
  }, []);

  const filterData = props.route.params?.filterData;

  const [selectCategoryList, setSelectCategoryList] = React.useState(
    filterData?.category
      ? filterData?.category.map(idCate =>
          dataCategory.find(cateRoot => cateRoot.sys.id === idCate),
        )
      : [],
  );
  const [onlineStatus, setOnlineStatus] = React.useState(
    filterData?.onlineStatus,
  );
  const [name, setName] = React.useState(filterData?.name);
  const [showModalStatusOnline, setShowModalStatusOnline] =
    React.useState(false);
  const [showModalCategory, setShowModalCategory] = React.useState(false);

  const _onPressBackButton = () => {
    props.navigation.goBack();
  };

  console.log('dataCategory', dataCategory);

  const _switchOnline = value => () => setOnlineStatus(value);

  const _onChangeName = value => setName(value);

  const _chooseCategory = cate => () => {
    console.log('_chooseCategory', cate);

    setSelectCategoryList(preSelectCategoryList => {
      const findIndexCate = preSelectCategoryList.findIndex(
        cateFind => cateFind.sys.id == cate.sys.id,
      );
      console.log('_chooseCategory', preSelectCategoryList, findIndexCate);
      if (findIndexCate != -1) {
        preSelectCategoryList.splice(findIndexCate, 1);
      } else {
        preSelectCategoryList.push(cate);
      }
      return [...preSelectCategoryList];
    });
  };

  const onReset = () => {
    setOnlineStatus(undefined);
    setName('');
    setSelectCategoryList([]);
  };

  const onSave = () => {
    props.route.params?.onSaveFilter({
      name,
      category: selectCategoryList.map(it => it.sys.id),
      onlineStatus,
    });
    props.navigation.goBack();
  };

  const _closeModalStatusOnline = () => setShowModalStatusOnline(false);

  const _onShowModalStatusOnline = () => (
    setShowModalStatusOnline(true), Keyboard.dismiss()
  );

  const _closeModalCategory = () => setShowModalCategory(false);

  const _onShowModalCategory = () => (
    setShowModalCategory(true), Keyboard.dismiss()
  );

  const displayCategoryListText = React.useMemo(
    () => selectCategoryList.map(cate => cate.displayName).join(', '),
    [selectCategoryList],
  );

  return {
    onlineStatus,
    _onPressBackButton,
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
    selectCategoryList,
    _chooseCategory,
    displayCategoryListText,
    onSave,
    onReset,
    orientation: contextData.orientation,
  };
};
