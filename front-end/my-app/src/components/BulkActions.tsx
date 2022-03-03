import { useState, useRef } from "react";

import {
  Box,
  Menu,
  IconButton,
  Button,
  ListItemText,
  ListItem,
  List,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { styled } from "@mui/material/styles";

import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import { Search } from "@mui/icons-material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: #fff;
`
);
const ButtonSearch = styled(Button)(
  ({ theme }) => `
      margin-right: -${theme.spacing(1)};
  `
);

function BulkActions() {
  const [onMenuOpen, menuOpen] = useState<boolean>(false);
  const moreRef = useRef<HTMLButtonElement | null>(null);
  const openMenu = (): void => {
    menuOpen(true);
  };
  const closeMenu = (): void => {
    menuOpen(false);
  };

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <FormControl variant="outlined" fullWidth>
            <OutlinedInputWrapper
              type="text"
              placeholder="Search terms here..."
              endAdornment={
                <InputAdornment position="end">
                  <ButtonSearch variant="contained" size="small">
                    Search
                  </ButtonSearch>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <SearchTwoToneIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton
            color="primary"
            onClick={openMenu}
            ref={moreRef}
            sx={{ ml: 2, p: 1 }}
          >
            <FilterAltIcon />
          </IconButton>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton
            color="primary"
            onClick={openMenu}
            ref={moreRef}
            sx={{ ml: 2, p: 1 }}
          >
            <CalendarViewMonthIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={openMenu}
            ref={moreRef}
            sx={{ ml: 2, p: 1 }}
          >
            <CalendarViewWeekIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

export default BulkActions;
