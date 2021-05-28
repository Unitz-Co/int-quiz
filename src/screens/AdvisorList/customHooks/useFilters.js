import {useState, useEffect} from 'react';
import {data} from '@utils';

const useFilters = () => {
  const listData = data?.data?.advisorProfileCollection?.items || [];

  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('');
  const [isFilter, setIsFilter] = useState(0);

  const [advisorList, setAdvisorList] = useState(listData);

  const onChange = value => {
    setValue(value);
  };

  const clearValue = () => {
    setValue('');
  };

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = value => {
    setIsVisible(false);
    setIsFilter(value);
  };

  useEffect(() => {
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
      case 0:
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
      default:
        break;
    }
  }, [isFilter, value]);

  return [
    value,
    onChange,
    clearValue,
    advisorList,
    isVisible,
    openModal,
    closeModal,
  ];
};

export default useFilters;
