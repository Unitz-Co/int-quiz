import {
    green,
    lightBlue,
    orange,
    deepOrange,
    purple,
    red,
    pink,
    yellow,
  } from '@material-ui/core/colors';
  
  export const colors = () => ({
    yellow: {
      color: '#fff',
      backgroundColor: yellow[700],
      '&:focus, &:hover': {
        color: '#fff',
        backgroundColor: yellow[700],
      },
    },
    lightOrange: {
      color: '#fff',
      backgroundColor: orange[500],
      '&:focus, &:hover': {
        color: '#fff',
        backgroundColor: orange[500],
      },
    },
    orange: {
      color: '#fff',
      backgroundColor: deepOrange[500],
      '&:focus, &:hover': {
        color: '#fff',
        backgroundColor: deepOrange[500],
      },
    },
    darkOrange: {
      color: '#fff !important',
      backgroundColor: deepOrange[700],
    },
    green: {
      color: '#fff',
      backgroundColor: green[500],
      '&:focus, &:hover': {
        color: '#fff',
        backgroundColor: green[500],
      },
    },
    darkGreen: {
      color: '#fff !important',
      backgroundColor: green[700],
    },
    blue: {
      color: '#fff',
      backgroundColor: lightBlue[500],
      '&:focus, &:hover': {
        color: '#fff',
        backgroundColor: lightBlue[500],
      },
    },
    darkBlue: {
      color: '#fff !important',
      backgroundColor: lightBlue[700],
    },
    pink: {
      color: '#fff',
      backgroundColor: pink[500],
      '&:focus, &:hover': {
        color: '#fff',
        backgroundColor: pink[500],
      },
    },
    darkPink: {
      color: '#fff !important',
      backgroundColor: pink[700],
    },
    purple: {
      color: '#fff',
      backgroundColor: purple[400],
      '&:focus, &:hover': {
        color: '#fff',
        backgroundColor: purple[400],
      },
    },
    darkPurple: {
      color: '#fff !important',
      backgroundColor: purple[700],
    },
    red: {
      color: '#fff',
      backgroundColor: red[500],
      '&:focus, &:hover': {
        color: '#fff',
        backgroundColor: red[500],
      },
    },
    darkRed: {
      color: '#fff',
      backgroundColor: red[800],
      '&:focus, &:hover': {
        color: '#fff',
        backgroundColor: red[800],
      },
    },
    label: {
      fontSize: '14px',
    },
  });
  