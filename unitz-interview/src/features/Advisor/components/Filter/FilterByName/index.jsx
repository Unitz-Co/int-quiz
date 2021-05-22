import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

FilterByName.propTypes = {
  onChange: PropTypes.func,
};

function FilterByName({ onChange }) {
  const [searchName, setSearchName] = useState("");
  const typingTimeOutRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchName(value);

    if (!onChange) return;

    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }
    typingTimeOutRef.current = setTimeout(() => {
      onChange(value);
    }, 300);
  };

  return (
    <TextField
      id="standard-basic"
      label="By Name"
      style={{ width: "100%" }}
      onChange={handleChange}
      value={searchName}
    />
  );
}

export default FilterByName;
