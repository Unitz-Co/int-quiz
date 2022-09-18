import { IconButton, InputBase, Paper } from "@mui/material";
import React, { memo, useRef, KeyboardEventHandler } from "react";
import SearchIcon from "@mui/icons-material/Search";

type SearchBarProps = {
  onSearch?: (value: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (onSearch && inputRef.current) {
      onSearch(inputRef.current.value);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Paper sx={{ display: "flex", paddingX: 1, width: "100%" }}>
      <InputBase
        inputRef={inputRef}
        placeholder="Search advisors..."
        sx={{ flex: 1 }}
        onKeyDown={handleKeyDown}
      />
      <IconButton onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default memo(SearchBar);
export type { SearchBarProps };
