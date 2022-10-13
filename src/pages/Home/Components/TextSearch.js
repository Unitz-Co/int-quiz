import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TextField, InputAdornment } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    backgroundColor: "#0000",
    border: "none",
    width: "100%",
    "& .MuiInputBase-input": {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
      letterSpacing: "0em",
      padding: "8px 20px",
      height: "initial",
    },
    "& .MuiOutlinedInput-adornedEnd": {
      paddingRight: "5px",
    },
    "& .MuiInputAdornment-positionStart": {
      color: "#808080",
    },
  },
}));

export const SearchField = ({ text, setText, placeholder }) => {
  const classes = useStyles();

  return (
    <TextField
      value={text}
      onChange={(e) => setText(e.target.value)}
      variant="outlined"
      placeholder={placeholder}
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <FontAwesomeIcon icon={faSearch} color="#808080" />
          </InputAdornment>
        ),
      }}
    />
  );
};
