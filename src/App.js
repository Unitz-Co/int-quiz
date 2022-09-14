/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import "./App.css";
import datas from "./database/data.json";
import Advisor from "./components/Advisor/Advisor";

function App() {
  const [data, setData] = useState([]);
  const new_data = datas.data;
  useEffect(() => {
    new_data.advisorProfileCollection.items.map((item) => {
      const random = Math.floor(Math.random() * 2);
      if (random === 0) {
        return (item.status = "online");
      }
      return (item.status = "offline");
    });
    setData(new_data.advisorProfileCollection.items);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return data.length > 0 && <Advisor items={data} />;
}

export default App;
