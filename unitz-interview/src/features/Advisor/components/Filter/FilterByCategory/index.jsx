import React from "react";
// import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
// FilterByCategory.propTypes = {};

function FilterByCategory(props) {
  return (
    <TextField
      id="standard-basic"
      label="By Category"
      style={{ width: "100%" }}
    />
  );
}

export default FilterByCategory;
