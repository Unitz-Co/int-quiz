import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { layoutStyles } from '../../assets/styles/layout/layoutStyles';

function Header() {
  const classes = layoutStyles();

  return (
    <AppBar className={classes.root} position="fixed" color="transparent">
      <Toolbar className={classes.toolbar}>
        <div className={classes.heading}>
          <img src={`https://images.ctfassets.net/bid9n8mcomvb/sbB7qd2VyI4CMHdXy7W10/3bb80eeb66308b2784c10cd0c0b998c2/Logo_Unitz_OK_2.png`} alt="Unitz"/>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
