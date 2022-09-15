import './App.css';
import Table from './Table';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:8080/api/advisor/${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  return (
    <div className="app">
      <input className="search" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
      <Table data={data} />
    </div>
  );
}

export default App;
