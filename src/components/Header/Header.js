import { SearchIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { searchSliceAction } from "../Store/SearchSlice";

import style from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const searchInput = useRef("");

  return (
    <div className={style["header"]}>
      <div className={style["logo"]}>
        <img
          src="https://images.ctfassets.net/bid9n8mcomvb/sbB7qd2VyI4CMHdXy7W10/3bb80eeb66308b2784c10cd0c0b998c2/Logo_Unitz_OK_2.png?w=40&q=50&h=40"
          alt="logo-img"
        />
      </div>
      <div className={style["search-bar"]}>
        <input
          placeholder="Search"
          type="text"
          ref={searchInput}
          onChange={() => {
            dispatch(searchSliceAction.searchInput(searchInput.current.value));
          }}
        />
        <IconButton
          colorScheme="head"
          aria-label="Search database"
          icon={<SearchIcon />}
        />
      </div>
    </div>
  );
};

export default Header;
