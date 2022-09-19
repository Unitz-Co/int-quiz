import React from "react";

export default function Cats(props) {
  const text = props.cats;
  return text.map((cat) => (
    <span className="advisors_cat_item">{cat.displayName}</span>
  ));
}