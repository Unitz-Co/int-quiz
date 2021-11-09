import { createTheme } from '@material-ui/core/styles';
import * as VARIABLES from './variables';

export const theme = createTheme({
  palette: {
    primary: {
      main: VARIABLES.PRIMARY,
      contrastText: '#fff',
    },
    secondary: {
      main: VARIABLES.SECONDARY,
      contrastText: '#fff',
    },
    text: {
      primary: VARIABLES.TEXT,
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }, 
});
