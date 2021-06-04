import React from "react";


export default function Advisorshorizontal(props) {
  const categories = props.item.categoriesCollection.items;
  
  return <>
  <td>{props.item.displayName}</td>
  <td>
    {categories.map((item) => {
      return <p>{item.displayName}</p>;
    })}
  </td>
</>;
}
