import {useState, useEffect} from 'react';
import {data} from '@utils';

const useFilters = () => {
  const listData = data?.data?.advisorProfileCollection?.items || [];

  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('');
  const [isFilter, setIsFilter] = useState(0);

  const [advisorList, setAdvisorList] = useState(listData);

  const onChange = async value => {
    await setValue(value);
  };

  const clearValue = () => {
    setValue('');
    setAdvisorList(listData);
  };

  const searchByName = e => {
    if (e !== '') {
      const result = listData.filter(item => {
        const itemData = item.displayName.toLowerCase();
        const keyData = e.toLowerCase();
        return itemData.indexOf(keyData) > -1;
      });
      setAdvisorList(result);
    } else {
      setAdvisorList(listData);
    }
  };

  useEffect(()=> {
    switch (isFilter) {
      case 1:
        const isOnline = listData.filter(item => item.isActive === true);
        if (value !== '') {
          const resultOnline = isOnline.filter(item => {
            const itemData = item.displayName.toLowerCase();
            const keyData = value.toLowerCase();
            return itemData.indexOf(keyData) > -1;
          });
          setAdvisorList(resultOnline);
        } else {
          setAdvisorList(isOnline);
        }
        break;
      case 2:
        const isOffline = listData.filter(item => item.isActive === false);
        if (value !== '') {
          const resultOffline = isOffline.filter(item => {
            const itemData = item.displayName.toLowerCase();
            const keyData = value.toLowerCase();
            return itemData.indexOf(keyData) > -1;
          });
          setAdvisorList(resultOffline);
        } else {
          setAdvisorList(isOffline);
        }

        break;
      default:
        if (value !== '') {
          const result = listData.filter(item => {
            const itemData = item.displayName.toLowerCase();
            const keyData = value.toLowerCase();
            return itemData.indexOf(keyData) > -1;
          });
          setAdvisorList(result);
        } else {
          setAdvisorList(listData);
        }
        break;
    }
  },[isFilter, value])

  const setFilter = () => {
   

  };

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = async (value) => {
    await setIsVisible(false);
    await setIsFilter(value)
  };

  return [
    value,
    onChange,
    clearValue,
    advisorList,
    setFilter,
    isVisible,
    openModal,
    closeModal,
  ];
};

export default useFilters;
