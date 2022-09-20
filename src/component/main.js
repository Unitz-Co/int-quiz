import React, { useState } from "react";
import records from "../data/data.json";
import Advisor from "./renderAdvisors";
import "../style/main.css";

const data = [];

records.data.advisorProfileCollection.items.map((advisor) =>
  data.push(advisor)
);
console.log(data);
export default function Main() {
  const [value, setValue] = useState(data);

  console.log(value);
  function handleSearch(e) {
    function searchNCheck(searchN) {
      if (
        searchN.displayName.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return searchN;
      } else if (
        searchN.status?.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return searchN;
      } else {
        function callbackFn(i) {
          return i.displayName
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        }
        let x = searchN.categoriesCollection.items.some(callbackFn);
        if (x === true) {
          console.log(x);
          return searchN;
        }
      }
    }
    setValue(data.filter(searchNCheck));
  }
  const Element = value.map((advisor) => {
    if (advisor.avatarUrl != null)
      return (
        <Advisor
          key={advisor.sys.id}
          date={advisor.sys.publishedAt}
          img={advisor.avatarUrl.url}
          name={advisor.displayName}
          email={advisor.email}
          phone={advisor.phone}
          status={advisor.status}
          skills={advisor.skillsCollection.items}
          services={advisor.servicesCollection.items}
          cats={advisor.categoriesCollection.items}
        />
      );
  });
  const [display, setDisplay] = useState("main_render");
  function toggleDisplay(e) {
    e.target.src.includes("grid.png")
      ? (e.target.src = "./list.png")
      : (e.target.src = "./grid.png");

    function updateDisplay() {
      display == "main_render"
        ? setDisplay("main_render hori")
        : setDisplay("main_render");
    }
    updateDisplay();
  }
  return (
    <div className="main">
      <div className="main_head">
        <input
          className="search-container"
          type="search"
          placeholder="Search"
          onChange={handleSearch}
        />
        <img className="icon" src="./grid.png" onClick={toggleDisplay} />
      </div>

      <div className={display}>{Element}</div>
    </div>
  );
}
