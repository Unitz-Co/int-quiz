import React from "react";
import { Fragment } from "react";

export default function Advisorsvertical(props) {
  
  return (
    <>
      <tr>
        <th>STT</th>
        {props.data.map((item, index) => {
          return (
            <Fragment>
              <td>{index}</td>
            </Fragment>
          );
        })}
      </tr>
      <tr>
        <th>Name</th>
        {props.data.map((item, index) => {
          return (
            <Fragment>
              <td>{item.displayName}</td>
            </Fragment>
          );
        })}
      </tr>
      <tr>
        <th>Category</th>
        {props.data.map((item, index) => {
          return (
            <Fragment>
              <td>
                {item.categoriesCollection.items.map((item) => {
                  return <p>{item.displayName}</p>;
                })}
              </td>
            </Fragment>
          );
        })}
      </tr>
    </>
  );
}
