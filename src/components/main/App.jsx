import './app.scss';
import Item from '../item/Item';
import { data } from '../../static/data';
import { useCallback, useState } from 'react';
import SearchIcon from '../../static/SearchIcon';

const App = () => {
  const [searchText, setSearchText] = useState();

  const handleInputChange = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);
  console.log(searchText);

  return (
    <div className='app d-flex flex-column justify-content-center align-items-center'>
      <div className='app__searchBar mb-3 mt-3'>
        <input
          type='text'
          className='app__searchBar--input form-control'
          placeholder='Enter advisors...'
          aria-label="Recipient's username"
          aria-describedby='button-addon2'
          value={searchText}
          onChange={handleInputChange}
        />
        <button
          className='app__searchBar--button'
          type='button'
          id='button-addon2'
        >
          <SearchIcon />
        </button>
      </div>
      <div className='app__list row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
        {data.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
