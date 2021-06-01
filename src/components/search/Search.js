import React, { useContext, useRef } from 'react';

import { HandleContext } from '../../contexts/HandleContext';

const Search = ({ type }) => {

  const { handleChangeStatus, handleSearchName, handleSearchCategory } = useContext(HandleContext);
  const timeOutSearch = useRef(null);

  const changeStatus = e => handleChangeStatus(e.target.value)


  const changeTitle = e => {
    handleChangeStatus('search');

    const value = e.target.value;
    const targetLabel = e.target.parentNode.className;

    if (timeOutSearch.current) clearTimeout(timeOutSearch.current);

    timeOutSearch.current = setTimeout(() => {
      switch (targetLabel) {
        case 'searchByname':
          handleSearchName(value);
          break;
        case 'searchBycategories':
          handleSearchCategory(value)
          break;
        default:
          break;
      }
    }, 500)
  }

  return (
    <>
      {type === 'status' ? (
        <div className='status' onChange={changeStatus}>
          <input type="radio" id="online" name='status' value='online' />
          <label htmlFor="online">Online</label>

          <input type="radio" id="offline" name='status' value='offline' />
          <label htmlFor="offline">Offline</label>
        </div>
      ) : (
        <div className={`searchBy${type}`}>
          <input type='text'
            placeholder={`Find ${type}`}
            onChange={changeTitle}
          />
        </div>
      )}
    </>
  )
};

export default Search;