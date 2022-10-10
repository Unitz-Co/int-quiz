import React, { useState, Suspense, lazy } from "react";
import SearchComp from "../SearchComp/SeachComp";

import data from "../../database/database.json";
import Loading from "../Loading/Loading";
const ProductList = lazy(() => {
  return Promise.all([
    import("../ProductList/ProductList"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});

function Product(props) {
  const [nameValueSearch, setNameValueSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [modeView, setModeView] = useState("horizontal");
  const { advisorProfileCollection } = data.data;
  /**
   * handle when user click search button
   */
  const onClickButtonSearch = (valueSearch) => {
    setNameValueSearch(valueSearch);
  };
  /**
   * handle when user click change status
   */
  const handleChangeStatus = (valueStatus) => {
    setStatus(valueStatus);
  };
  //handle when user click change status
  const handleChangeView = (value) => {
    setModeView(value);
  };
  return (
    <>
      <SearchComp
        status={status}
        onClickButtonSearch={onClickButtonSearch}
        handleChangeStatus={handleChangeStatus}
        handleChangeView={handleChangeView}
        modeView={modeView}
      />
      <Suspense fallback={<Loading />}>
        <ProductList
          advisorData={advisorProfileCollection}
          nameValueSearch={nameValueSearch}
          status={status}
          modeView={modeView}
        />
      </Suspense>
    </>
  );
}

export default Product;
