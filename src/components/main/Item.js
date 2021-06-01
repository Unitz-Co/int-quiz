import React from 'react';
import CategoryItem from './CategoryItem';

const Item = ({ item }) => {

  const categoryItem = item.categoriesCollection.items;

  const styleColor = {
    color: item.status === 'online' ? 'green' : 'red',
    fontWeight: 'bold',
  };

  return (
    <div className='main-item'>
      <ul className='item'>
        <li className='status'
          style={styleColor}
        >{item.status === 'online' ? (<i className="fas fa-toggle-on"></i>) : (<i className="fas fa-toggle-on"></i>)}</li>
        <li className='name'>{item.displayName ? item.displayName : '---'}</li>
        <li className='email'>{item.email ? item.email : '---'}</li>
        <li className='phone'>{item.phone ? item.phone : '---'}</li>
        <ul className='category'>
          {categoryItem.length !== 0 ? (
            categoryItem.map(item => (<CategoryItem item={item} key={item.sys.id} />))
          ) : '---'}
        </ul>
      </ul>
    </div>
  )
};

export default Item;