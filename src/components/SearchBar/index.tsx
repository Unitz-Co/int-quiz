import { IconButton, Input } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

interface props {
  search: (input: string) => void;
}

export const SearchBar = ({ search }: props) => {
  return (
    <div className="searchBox">
      <Input
        type="search"
        placeholder="Search for..."
        sx={{ width: 400 }}
        onChange={(e) => search(e.target.value)}
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </div>
  );
};
