import React from 'react';
import './styles.css';

export default function Search(props) {
  const {
    filterTypes, filterType, searchValue,
    setFilterType,
    setSearchValue,
  } = props;

  return (
    <div className="container">
      <select
        className="select"
        defaultValue={filterTypes[0]}
        onChange={(evt) => setFilterType(evt.target.value)}
      >
        {
          filterTypes.map((opt) => (
            <option selected={opt === filterType} key={opt}>{opt}</option>
          ))
        }
      </select>
      <input
        className="input"
        type="text"
        placeholder="Search value..."
        value={searchValue}
        onChange={(evt) => setSearchValue(evt.target.value)}
      />
    </div>
  )
}