import { useState } from "react";
// @mui
import { Box, Button, TextField } from "@mui/material";

// ----------------------------------------------------------------------

export default function SearchBar({ onFilterString }) {
  const [searchString, setSearchString] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 2,
      }}
    >
      <TextField
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onFilterString(searchString);
          }
        }}
        onChange={(e) => setSearchString(e.target.value)}
        sx={{ width: 500 }}
        placeholder="Search by name or category"
      />

      <Button
        sx={{ ml: 2 }}
        variant="contained"
        color="secondary"
        onClick={() => onFilterString(searchString)}
        size="large"
      >
        Search
      </Button>
    </Box>
  );
}
