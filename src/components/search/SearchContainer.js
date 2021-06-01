import React from 'react';

import Search from './Search';

const SearchContainer = () => {
  return (
    <div className='search-container'>
      <Search type={`status`} />
      <Search type={`name`} />
      <Search type={`categories`} />
    </div>
  )
};

export default SearchContainer;