// @mui
import { Box } from "@mui/material";
import SearchBar from "./ToolBarComponents/SearchBar";
// components
import StatusRadio from "./ToolBarComponents/StatusRadio";

// ----------------------------------------------------------------------

export default function ToolBar({
  onFilterString,
  activityStatus,
  onChangeActivityStatus,
}) {
  return (
    <Box sx={{ my: 5 }}>
      <SearchBar onFilterString={onFilterString} />

      <StatusRadio
        activityStatus={activityStatus}
        onChangeActivityStatus={onChangeActivityStatus}
      />
    </Box>
  );
}
