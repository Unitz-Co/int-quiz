import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FilterByName from "../Filter/FilterByName";
import FilterByCategory from "../Filter/FilterByCategory";
// import FilterByCategory from "../Filter/FilterByCategory";
AdvisorFilter.propTypes = {
  filters: PropTypes.object.isRequired,
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

function AdvisorFilter({ onChange, filters }) {
  const classes = useStyles();
  const handleChangeName = (values) => {
    if (!onChange) return;
    const newFilter = {
      ...filters,
      searchName: values,
    };
    onChange(newFilter);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FilterByName onChange={handleChangeName} />
      <FilterByCategory />
    </form>
  );
}

export default AdvisorFilter;
