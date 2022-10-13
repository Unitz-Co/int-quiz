import React, { Fragment, useEffect, useState } from "react";
import advisorService from "../../api";
import { TableAdvisor } from "./Components/tableAdvisor";
import { AsvisorFilter } from "./Components/filterAdvisor";
import jsonData from "../../data.json";
import "./home.css";

const Home = () => {
  const [dataAdvisor, setDataAdvisor] = useState(
    jsonData.data.advisorProfileCollection.items
  );
  const [listAdvisor, setListAdvisor] = useState(
    jsonData.data.advisorProfileCollection.items
  );
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setListCategory] = useState("");
  const [onlineFilter, setOnlineFilter] = useState("All");

  const handleSearch = (name, category) => {
    console.log("name, cate", name, category);
    const data = advisorService.getAdvisors(
      name,
      category,
      dataAdvisor,
      onlineFilter
    );
    setListAdvisor(data);
  };

  const editStatus = (id) => {
    console.log("update", id);
    const data = advisorService.updateAdvisorStatus(
      id,
      dataAdvisor,
      setDataAdvisor,
      searchName,
      searchCategory
    );
    setListAdvisor(data);
  };

  return (
    <div className="homeContainer">
      <div className="tableAdvisorContainer">
        <AsvisorFilter
          searchName={searchName}
          setSearchName={setSearchName}
          searchCategory={searchCategory}
          setSearchcategory={setListCategory}
          handleSearch={handleSearch}
          onlineFilter={onlineFilter}
          setOnlineFilter={setOnlineFilter}
        />
        <TableAdvisor data={listAdvisor} editStatus={editStatus} />
      </div>
    </div>
  );
};

export default Home;
