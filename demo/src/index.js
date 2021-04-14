import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import ListAdvisors from "../../src";
import { get } from "lodash";

const Demo = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
      <div
        style={{
          width: "100%",
          height: "100%",
          padding:"0"
        }}
      >
        <ListAdvisors data={get(data, 'data')} />
      </div>
  );
};

console.log("run demo app");
render(<Demo />, document.querySelector("#demo"));
