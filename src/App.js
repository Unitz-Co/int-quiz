import "./App.css";
import Advisor from "./components/Advisor/Advisor";
import myData from "./data.json";
import icon_search from "./assets/search.png";
import { useState } from "react";

function App() {
  const collections = myData.data.advisorProfileCollection.items;
  // console.log(collections);
  const [advisors, setAdvisors] = useState(collections);
  const [search, setSearch] = useState("");

  const onSeach = () => {
    if (search.length > 0) {
      const searchedObjects = [];

      if (search == "online" || search == "offline") {
        const status = search == "online" ? true : false;
        collections.forEach((item, index) => {
          if (item.online == status) {
            if (!searchedObjects.includes(item)) searchedObjects.push(item);
          }
        });
        setAdvisors(searchedObjects);
        return;
      }

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
  return (
    <div className="App">
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
