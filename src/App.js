import React, {useState} from 'react';
import './App.css';
import List from "./List";

function App() {
  const [inputText, setInputText] = useState("");     // input search text
  const [filterType, setFilterType] = useState("0");  // input search filter type

  // handle on change search text box
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }; 

  // handle on change search filter select
  let filterHandler = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type="search" placeholder="Search" onChange={inputHandler} />
          
          <select onChange={filterHandler}>
            <option name="advisor"  value="0" selected>Advisor</option>
            <option name="category" value="1" >Category</option>
            <option name="online"   value="2" >Online</option>
            <option name="offline"  value="3" >Offline</option>
          </select>
        </div>

        <List input={[inputText, filterType]} />
      </header>

    </div>
  );
}

export default App;
