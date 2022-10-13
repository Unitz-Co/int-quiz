// Packages
import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Material UI
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputBase from '@mui/material/InputBase';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// Icons Material
import SearchIcon from '@mui/icons-material/Search';

// Store
import {
  selectOnlineOnly,
  selectSearchKeyword,
  setSearchKeyword,
  switchOnlineOnly,
  updateList,
} from 'app/advisorSlice';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const dispatch = useDispatch();

  const onlineOnly = useSelector(selectOnlineOnly);
  const searchKeyword = useSelector(selectSearchKeyword);

  useEffect(() => {
    dispatch(updateList());
  }, [dispatch, onlineOnly, searchKeyword])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Container sx={{
          padding: {
            xs: 0,
          },
        }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              ADVISOR LIST
            </Typography>

            <FormGroup sx={{
              display: 'flex',
            }}>
              <FormControlLabel control={<Switch checked={onlineOnly} color="default" onChange={() => {
                dispatch(switchOnlineOnly());
              }} />} label="Online" />
            </FormGroup>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchKeyword}
                onChange={(e) => {
                  dispatch(setSearchKeyword(e.target.value));
                }}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
