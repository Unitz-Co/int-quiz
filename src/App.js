import { useState, useEffect } from 'react';

import Search from './components/Search';
import HorizontalList from './components/HorizontalList';
import VerticalList from './components/VerticalList';


function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await (await fetch('./data.json')).json();

      setItems(data.advisorProfileCollection.items);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Search />
      <HorizontalList />
      <VerticalList />
    </div>
  );
}

export default App;
