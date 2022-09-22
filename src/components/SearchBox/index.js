import { lowerCase, debounce } from 'lodash';
import { filterList } from '../../utils/commonFunction';
import { Input } from '@chakra-ui/react';

export default function SearchBox({ onFilterData, originalData, onSetKeyWord, status }) {
  const handleSearch = e => {
    let value = e.target.value;
    let newData = originalData;

    value = value.trim();
    value = lowerCase(value);
    
    newData = filterList(originalData, { keys: { status: status, filterAll: status ? false : true, keyWord: value }});

    onFilterData(newData);
    onSetKeyWord(value);
  };

  const handleDebounceSearch = debounce(handleSearch, 300);

  return (
    <Input 
      type='text' 
      borderColor="#56758f" 
      placeholder='Search by name, category' 
      marginLeft="0.75rem" 
      onChange={e => handleDebounceSearch.call(null, e)}
    />
  );
};