import { filter, lowerCase, get, map, some } from 'lodash';

export function filterList(data = [], params) {
  const { keyWord, status, filterAll } = params.keys;
  let newData = data;

  const categoriesList = item => {
    const newCategories = map(get(item, 'categoriesCollection.items', []), ele => lowerCase(ele.displayName)) || item;

    return newCategories;
  }
  
  if (filterAll) {
    newData = filter(data, item => (
      lowerCase(item.displayName).includes(keyWord) || some(categoriesList(item), ele => ele.includes(keyWord))
    ));
  } else {
    newData = filter(data, item => (
      item.status === status && (lowerCase(item.displayName).includes(keyWord) || some(categoriesList(item), ele => ele.includes(keyWord)))
    ));
  }

  return newData;
};