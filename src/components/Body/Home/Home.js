import { useState } from "react";
import { useSelector } from "react-redux";
import { Switch } from "@chakra-ui/react";
import JSONDATA from "../../../data.json";

import style from "./Home.module.css";
import Item from "../Item/Item";

const data = JSONDATA.data.advisorProfileCollection.items;

const Home = () => {
  const [verView, setVerView] = useState(false);

  const searchInput = useSelector((state) => state.searchSlice.searchItem);

  return (
    <div className={style["home"]}>
      <div className={style["view-button"]}>
        <span className={`${verView && style["view-active"]}`}>Vertical</span>
        <Switch size="md" onChange={() => setVerView(!verView)} />
        <span className={`${!verView && style["view-active"]}`}>
          Horizontal
        </span>
      </div>
      <div className={style["advisors-list"]}>
        <div
          className={`${
            verView ? style["advisors-list-hor"] : style["advisors-list-ver"]
          }`}
        >
          {data
            .filter((val) => {
              if (searchInput === "") {
                return val;
              } else if (
                val.displayName
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              )
                return val;
              else {
                let cate = val.skillsCollection.items.some((val) => {
                  return val.displayName
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
                });
                if (cate === true) {
                  return val;
                }
              }
            })
            .map((item) => (
              <Item data={item} key={item.sys.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
