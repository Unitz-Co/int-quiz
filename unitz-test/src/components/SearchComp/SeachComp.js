import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { ADVISOR_STATUS } from "../../constants/index";
import { ADVISOR_MODE_VIEW } from "../../constants/index";
import "./SearchComp.scss";
SearchComp.propTypes = {
  status: PropTypes.string,
  onClickButtonSearch: PropTypes.func,
  handleChangeStatus: PropTypes.func,
  handleChangeView: PropTypes.func,
  modeView: PropTypes.string,
};

function SearchComp({
  status,
  onClickButtonSearch,
  handleChangeStatus,
  handleChangeView,
  modeView,
}) {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="search-container">
      <Container maxWidth="lg">
        <Grid container spacing={2} p={2} alignItems="center">
          <Grid item xs={2}>
            <Avatar
              variant="square"
              alt="Unitz"
              src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd3JrSWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0cb9cd4e354341bc025aceb83c03ce07ac479c29/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--a364054a300021d6ece7f71365132a9777e89a21/Logo_Unitz%20(PNG).png"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              spellCheck={false}
              label="Nhập danh mục hoặc tên để tìm kiếm "
              variant="outlined"
              fullWidth
              size="small"
              onChange={(event) => {
                setSearchInput(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              onClick={() => onClickButtonSearch(searchInput)}
            >
              Search
            </Button>
          </Grid>
          <Grid item xs={3}>
            <FormControl>
              <RadioGroup
                row
                value={status}
                onChange={(event) => {
                  handleChangeStatus(event.target.value);
                }}
              >
                {Object.keys(ADVISOR_STATUS).map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio />}
                    label={ADVISOR_STATUS[value]}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl>
              <RadioGroup
                row
                value={modeView}
                onChange={(event) => {
                  handleChangeView(event.target.value);
                }}
              >
                {Object.keys(ADVISOR_MODE_VIEW).map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio />}
                    label={ADVISOR_MODE_VIEW[value]}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SearchComp;
