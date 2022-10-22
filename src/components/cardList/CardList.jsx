import React, { useState } from "react";
import { data } from "../../data.js";
import Card from "../card/Card.jsx";
import "./cardList.scss";

const CartList = () => {
  const [input, setInput] = useState("");
  const [myData, setMyData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [listView, setListView] = useState(true);

  const handleChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  const showResult = () => {
    if (input === "") {
      setMyData([]);
      setIsSearch(false);
    } else {
      setMyData(
        data.filter(
          (item) =>
            item.name.toLowerCase().includes(input) ||
            item.categories.join(" ").toLowerCase().includes(input)
        )
      );
      setIsSearch(true);
    }
  };

  const showListView = (flag) => {
    setListView(flag);
  };

  return (
    <div className="container-sm container mx-auto py-5 my-5">
      <div className="search">
        <input type="text" className="input-search" onChange={handleChange} />
        <button className="btn-search" onClick={showResult}>
          Search
        </button>
        {isSearch && (
          <button className="btn-cancel" onClick={(e) => setIsSearch(false)}>
            Cancel
          </button>
        )}
        {isSearch && <span>No: {myData.length}</span>}
      </div>

      <div className="wrapper">
        <div className="links">
          <ul>
            <li
              className={"li-list  " + (listView ? "active" : "inactive")}
              data-view="list-view"
              onClick={() => showListView(true)}
            >
              <i className="fas fa-th-list"></i>
              List View
            </li>
            <li
              className={"li-grid  " + (listView ? "inactive" : "active")}
              data-view="grid-view"
              onClick={() => showListView(false)}
            >
              <i className="fas fa-th-large"></i>
              Grid View
            </li>
          </ul>
        </div>

        <div className="view_main">
          <div
            className="vew_wrap list-view"
            style={{ display: listView ? "block" : "none" }}
          >
            {isSearch
              ? myData.map((item) => <Card key={item.id} item={item} />)
              : data.map((item) => <Card key={item.id} item={item} />)}
          </div>
          <div
            className="vew_wrap grid-view"
            style={{ display: listView ? "none" : "flex" }}
          >
            {isSearch
              ? myData.map((item) => <Card key={item.id} item={item} />)
              : data.map((item) => <Card key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
