import React, { useState } from "react";
import "./App.css";
import Advisors from "./components/Advisors";
import Header from "./components/Header";
import { HORIZONTAL_MODE, VERTICAL_MODE } from "./configs";
import customData from "./data.json";
const { items } = customData.data.advisorProfileCollection;

function App() {
  const [data, setData] = useState(items);
  const [mode, setMode] = useState(VERTICAL_MODE);
  const handleChangeMode = () => {
    setMode(mode === VERTICAL_MODE ? HORIZONTAL_MODE : VERTICAL_MODE);
  };

  const handleFilter = (keyword) => {
    const newData = [...items];
    setData(
      newData.filter((item) =>
        item.displayName.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  return (
    <>
      <Header
        mode={mode}
        handleFilter={handleFilter}
        handleChangeMode={handleChangeMode}
      />
      <div className="App">
        <Advisors data={data} mode={mode} />
      </div>
    </>
  );
}

export default App;
