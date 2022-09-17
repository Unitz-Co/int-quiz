import React, { memo } from "react";
import useHome from "./useHome";
import HomeUI from "./HomeUI";

const Home = () => {
  const {
    categoryList,
    searchedData,
    handleSearchData,
    categories,
    handleSelectCategories,
  } = useHome();
  return (
    <HomeUI
      searchBar={{ onSearch: handleSearchData }}
      advisorContainer={{ data: searchedData }}
      categorySelection={{
        data: categoryList,
        categories,
        onChange: handleSelectCategories,
      }}
    />
  );
};

export default memo(Home);
