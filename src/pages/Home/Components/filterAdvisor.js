import { SearchField } from "./TextSearch";
import { Button, Select, MenuItem } from "@mui/material";
import "./index.css";

const MenuProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  getContentAnchorEl: null,
};

export const AsvisorFilter = (props) => {
  const {
    searchName,
    setSearchName,
    searchCategory,
    setSearchcategory,
    handleSearch,
    onlineFilter,
    setOnlineFilter,
  } = props;

  const handleChange = (event) => {
    console.log("event.target.value", event.target.value);
    setOnlineFilter(event.target.value);
  };

  return (
    <div className="filterAdvisorContainer">
      <div className="filterTextContainer">
        <div style={{ minWidth: "200px", maxWidth: "500px" }}>
          <div>
            <SearchField
              text={searchName}
              setText={setSearchName}
              placeholder="Search advisor name"
            />
          </div>
        </div>
        <div style={{ minWidth: "200px", maxWidth: "500px" }}>
          <div>
            <SearchField
              text={searchCategory}
              setText={setSearchcategory}
              placeholder="Search category"
            />
          </div>
        </div>
        <div style={{ minWidth: "200px", maxWidth: "500px" }}>
          <div style={{ width: "max-content" }}>
            <Select
              className="selectStatus"
              variant="outlined"
              defaultValue={"All"}
              value={onlineFilter}
              MenuProps={MenuProps}
              onChange={handleChange}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"true"}>Online</MenuItem>
              <MenuItem value="false">Offline</MenuItem>
            </Select>
          </div>
        </div>
      </div>

      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSearch(searchName, searchCategory)}
        >
          Search
        </Button>
      </div>
    </div>
  );
};
