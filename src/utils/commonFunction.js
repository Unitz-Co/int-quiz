import { filter, lowerCase } from 'lodash';

export function filterList(data = [], params) {
  const { keyWord, status, filterAll } = params.keys;
  let newData = data;

  if (filterAll) {
    newData = filter(data, item => (
      lowerCase(item.displayName).includes(keyWord)
    ));
  } else {
    newData = filter(data, item => (
      item.status === status && lowerCase(item.displayName).includes(keyWord)
    ));
  }

  return newData;
};