import { makeStyles } from '@material-ui/core/styles';
import * as VARIABLES from '../libs/variables';

export const layoutStyles = makeStyles(theme => ({
  root: {
    background: VARIABLES.PRIMARY,
    '& header': {
      background: VARIABLES.PRIMARY,
      zIndex: 900,
    },
  },
  heading: {
    '& img': {
      height: '50px'
    }
  },
  toolbar: {
    height: '60px',
  },
  menu: {
    '& ul': {
      minWidth: '150px',
    },
  },
  footer: {
    background: VARIABLES.PRIMARY,
    color: VARIABLES.COLOR_WHITE,
    textAlign: 'center',
    padding: '16px'
  },
}));
