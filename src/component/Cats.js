import React from "react";
import "../style/render.css";

export default function Cats(props) {
  const data = props.cats;
  return data.map((cat) => (
    <span className="advisors_cat_item">{cat.displayName}</span>
  ));
}
