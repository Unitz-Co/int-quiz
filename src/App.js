import { useState, useEffect, useMemo } from 'react';

import Search from './components/Search';
import HorizontalList from './components/HorizontalList';
import VerticalList from './components/VerticalList';

import './App.css';

const filterTypes = ['name', 'category']

function App() {
  const [items, setItems] = useState(null);
  const [filterType, setFilterType] = useState(filterTypes[0]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await (await fetch('./data.json')).json();

      setItems(data.advisorProfileCollection.items);
    };

    fetchData();
  }, []);

  // reset filter
  useEffect(() => {
    setSearchValue('');
  }, [filterType]);

  const calculatedItems = useMemo(() => {
    if (!items) {
      return [];
    }

    switch (filterType) {
      case 'name':
        return items.filter((item) => item.displayName.toLowerCase().includes(searchValue.toLowerCase()));
      case 'category':
        return items.filter((item) => (item.categoriesCollection?.items || [])
          .map((category) => category.displayName.toLowerCase()).join(' ').includes(searchValue.toLowerCase()));
      default:
        return [];
    }
  }, [items, searchValue, filterType]);

  return (
    <div className="App">
      <Search
        filterTypes={filterTypes}
        filterType={filterType}
        setFilterType={setFilterType}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <h2>Horizontal</h2>
      <HorizontalList items={calculatedItems} />
      <h2>Vertical</h2>
      <VerticalList items={calculatedItems} />
    </div>
  );
}

export default App;
