import "./App.css";
import Advisor from "./components/Advisor/Advisor";
import myData from "./data.json";
import icon_search from "./assets/search.png";
import icon_filter from "./assets/filter.png";
import { useState } from "react";

function App() {
  const collections = myData.data.advisorProfileCollection.items;
  const [advisors, setAdvisors] = useState(collections);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false);

  const onSeach = () => {
    if (search.length > 0) {
      const searchedObjects = [];

      collections.forEach((item, index) => {
        if (
          item.displayName
            .toLowerCase()
            .includes(search.toString().toLowerCase())
        ) {
          if (!searchedObjects.includes(item)) searchedObjects.push(item);
        }

        item.categoriesCollection.items.forEach((c, i) => {
          if (
            c.displayName
              .toLowerCase()
              .includes(search.toString().toLowerCase())
          ) {
            if (!searchedObjects.includes(item)) searchedObjects.push(item);
          }
        });
      });

      setAdvisors(searchedObjects);
    }
  };

  const onFilter = (status) => {
    if (status == null) {
      setAdvisors(collections);
      return;
    }
    const searchedObjects = [];
    collections.forEach((item, index) => {
      if (item.online == status) {
        if (!searchedObjects.includes(item)) searchedObjects.push(item);
      }
    });
    setAdvisors(searchedObjects);
  };
  return (
    <div
      className="App"
      onClick={() => {
        if (menu == true) setMenu(false);
      }}
    >
      <div className="flex-end">
        <div className="search">
          <input
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                onSeach();
              }
            }}
          />
          <img src={icon_search} alt="search" onClick={() => onSeach()} />
        </div>
        <div className="filter">
          <img src={icon_filter} onClick={() => setMenu(!menu)} />
          {menu === true ? (
            <div className="filter-status">
              <p onClick={() => onFilter(null)}>All</p>
              <p onClick={() => onFilter(true)}>Online</p>
              <p onClick={() => onFilter(false)}>Offline</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div>
        {advisors.map((item, index) => {
          return <Advisor key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
