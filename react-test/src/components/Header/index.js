import {
  AppstoreOutlined,
  SearchOutlined,
  UnorderedListOutlined
} from "@ant-design/icons";
import _ from "lodash";
import React, { useRef, useState } from "react";
import { VERTICAL_MODE } from "../../configs";
import styles from "./Header.module.css";

export default function Header({ mode, handleChangeMode, handleFilter }) {
  const [valueSearch, setValueSearch] = useState("");

  const debounceSearch = useRef(
    _.debounce((nextValue) => handleFilter(nextValue), 1000)
  ).current;

  const handleChangeInput = (e) => {
    setValueSearch(e?.target?.value);
    debounceSearch(e?.target?.value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.searchBar}>
        <input
          placeholder="Search..."
          value={valueSearch}
          onChange={handleChangeInput}
        />
        <button onClick={() => handleFilter(valueSearch)}>
          <SearchOutlined />
        </button>
      </div>
      <div className={styles.changeModeBtn} onClick={handleChangeMode}>
        {mode === VERTICAL_MODE ? (
          <AppstoreOutlined className={styles.icon} />
        ) : (
          <UnorderedListOutlined className={styles.icon} />
        )}
      </div>
    </div>
  );
}
