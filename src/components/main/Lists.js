import React, { useContext } from 'react';

import Item from './Item';
import Loading from '../Loading';

import { HandleContext } from '../../contexts/HandleContext';

const Lists = () => {

  const { getItems, isLoading } = useContext(HandleContext);


  return (
    <div className='main-lists'>
      {isLoading ? (<Loading />) : (
        getItems.map(item => (
          <Item item={item} key={item.sys.id} />
        )))}
    </div>
  )
};

export default Lists;