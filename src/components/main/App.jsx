import './app.scss';
import Item from '../item/Item';
import { data, categoriesCollection } from '../../static/data';
import { useCallback, useEffect, useState } from 'react';
import SearchIcon from '../../static/SearchIcon';
import { debounce } from 'lodash';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [searchFilters, setSearchFilters] = useState([]);
  const [searchResult, setSearchResult] = useState(data);
  const [searchResultFilter, setSearchResultFilter] = useState([]);
  const [suggestionsResults, setSuggestionsResults] =
    useState(categoriesCollection);

  const handleInputChange = useCallback(
    debounce((e) => {
      setSearchText(e.target.value);
    }, 300),
    []
  );

  const handleFilterChange = (e) => {
    const newState = suggestionsResults.map((suggestion) => {
      if (suggestion.displayName === e) {
        if (suggestion.choose || suggestion.choose === true) {
          return { ...suggestion, choose: false };
        } else {
          return { ...suggestion, choose: true };
        }
      }
      return suggestion;
    });
    setSuggestionsResults(newState);

    if (searchFilters.length === 0) {
      setSearchFilters([...searchFilters, e]);
    } else {
      searchFilters.map((search) =>
        search !== e
          ? setSearchFilters([...searchFilters, e])
          : setSearchFilters((prevState) =>
              prevState.filter((todo) => todo !== e)
            )
      );
    }
  };

  const handleKeypress = (even) => {
    if (even.key === 'Enter') {
      even.preventDefault();
      handleSubmitButton(data);
    }
  };

  const handleSubmitButton = (data) => {
    if (searchText !== '') {
      setSearchResult(
        data.filter((item) =>
          Object.values(item)
            .join('')
            .toLowerCase()
            .includes(searchText.toLowerCase())
        )
      );

      if (searchFilters.length > 0) {
        setSearchResult(handleFilter(searchResult, searchFilters.slice(-1)[0]));
      }
    }

    if (searchFilters.length > 0) {
      setSearchResult(handleFilter(searchResult, searchFilters.slice(-1)[0]));
      setSearchResultFilter(
        handleFilter(searchResult, searchFilters.slice(-1)[0])
      );

      if (searchText !== '') {
        setSearchResult(
          searchResult.filter((item) =>
            Object.values(item)
              .join('')
              .toLowerCase()
              .includes(searchText.toLowerCase())
          )
        );
      }
    }
  };

  const handleFilter = (data, titleFilter) => {
    const filteredData = data.filter((item) => {
      return Object.values(
        item.categoriesCollection.items.length !== 0 &&
          item.categoriesCollection.items.map(
            (category) => category.displayName
          )
      )
        .join('')
        .toLowerCase()
        .includes(titleFilter.toLowerCase());
    });
    return filteredData;
  };

  useEffect(() => {
    if (searchText === '' && searchFilters.length === 0) {
      setSearchResult(data);
    }
    if (searchText === '' && searchFilters.length !== 0) {
      setSearchResult(handleFilter(data, searchFilters.slice(-1)[0]));
      if (searchFilters.length > 1) {
        searchResultFilter.length !== 0
          ? setSearchResult(
              handleFilter(searchResultFilter, searchFilters.slice(-1)[0])
            )
          : setSearchResult(
              handleFilter(searchResult, searchFilters.slice(-1)[0])
            );
      } else {
        setSearchResult(handleFilter(data, searchFilters.slice(-1)[0]));
      }
    }
    if (searchText !== '' && searchFilters.length === 0) {
      handleSubmitButton(data);
    }
    if (searchText !== '' && searchFilters.length !== 0) {
      handleSubmitButton(searchResult);
    }
  }, [searchText, searchFilters]);

  return (
    <div className='app d-flex flex-column justify-content-center align-items-center'>
      <div className='app__searchBar mb-3 mt-3'>
        <input
          type='text'
          className='app__searchBar--input form-control'
          placeholder='Enter advisors...'
          aria-label="Recipient's username"
          aria-describedby='button-addon2'
          onChange={handleInputChange}
          onKeyPress={handleKeypress}
        />
        <button
          className='app__searchBar--button'
          type='button'
          id='button-addon2'
          onClick={handleSubmitButton}
        >
          <SearchIcon />
        </button>
      </div>
      <div className='app__suggestions'>
        <div className='app__suggestionsFlow'>
          {suggestionsResults.map((category, index) => (
            <div
              key={index}
              className={
                category.choose
                  ? 'app__suggestionsFlow--items app__suggestionsFlow--choose'
                  : 'app__suggestionsFlow--items'
              }
              onClick={() => handleFilterChange(category.displayName)}
            >
              <img
                className='app__suggestionsFlow--img'
                src={category.avatarUrl && category.avatarUrl.url}
                alt={category.avatarUrl && category.avatarUrl.title}
              />
              <span className='app__suggestionsFlow--title'>
                {category.displayName}
              </span>
            </div>
          ))}
        </div>
      </div>
      {searchResult.length === 0 ? (
        <div className='app__list--notify'>No advisors!</div>
      ) : (
        <div className='app__list row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
          {searchResult.map((item, index) => (
            <Item key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
