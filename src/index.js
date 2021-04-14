import React, { useState, useEffect } from "react";
import styles from "./styles.scss";
import { get, isUndefined, filter, size } from "lodash";
import AdvisorItem from "./components/advisor-item";
import AdvisorInfo from "./components/advisor-info";
const ListAdvisors = ({ data }) => {
  const listAdvisorsData = get(data, ["advisorProfileCollection", "items"]);
  const [searchValue, setSearchValue] = useState("");
  const [isVertical, setVertical] = useState(true);
  const [advisorSelected, setAdvisorSelected] = useState({});
  const [localData, setLocalData] = useState([]);
  useEffect(() => {
    if (!isUndefined(listAdvisorsData)) {
      setAdvisorSelected(listAdvisorsData[0]);
      setLocalData(listAdvisorsData);
    }
  }, [listAdvisorsData]);
  const onSearch = () => {
    let filterList = [];
    var i;
    if (searchValue !== "") {
      for (i = 0; i < listAdvisorsData.length; i++) {
        if (
          listAdvisorsData[i].displayName === searchValue ||
          listAdvisorsData[i].status === searchValue ||
          size(
            filter(listAdvisorsData[i].categoriesCollection.items, [
              "displayName",
              searchValue,
            ])
          ) > 0
        ) {
          filterList.push(listAdvisorsData[i]);
        }
      }
      setLocalData(filterList);
      setSearchValue("");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.searchContent}>
          <input
            value={searchValue}
            placeholder="Enter name, categorys or status to search advisors"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={onSearch}>Search</button>
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>View mode</button>
          <div className={styles.dropdownContent}>
            <a
              href="#"
              style={{ color: isVertical ? "#f9935e" : "#000" }}
              onClick={() => setVertical(true)}
            >
              Vertical
            </a>
            <a
              href="#"
              style={{ color: !isVertical ? "#f9935e" : "#000" }}
              onClick={() => setVertical(false)}
            >
              Horizontal
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          !isVertical
            ? `${styles.content} ${styles.horizontal}`
            : styles.content
        }
      >
        <div className={styles.listAdvisors}>
          {(localData || []).map((advisor, index) => (
            <AdvisorItem
              key={index}
              data={advisor}
              advisorSelected={advisorSelected}
              onSelectAdvisor={setAdvisorSelected}
            />
          ))}
        </div>
        <div className={styles.advisorInfo}>
          <AdvisorInfo data={advisorSelected} />
        </div>
      </div>
    </div>
  );
};
export default ListAdvisors;
