import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FilterByName from "../Filter/FilterByName";
// import FilterByCategory from "../Filter/FilterByCategory";
AdvisorFilter.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function AdvisorFilter({ onChange }) {
  const classes = useStyles();
  const handleChange = (values) => {
    if (onChange) onChange(values);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FilterByName onChange={handleChange} />
      {/* <FilterByCategory /> */}
    </form>
  );
}

export default AdvisorFilter;
