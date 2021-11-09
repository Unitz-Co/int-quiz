import React from 'react';
import { layoutStyles } from '../../assets/styles/layout/layoutStyles';

function Footer() {
  const classes = layoutStyles();
  return (
    <footer className={classes.footer}>
      <span className="copyright">© Unitz company Ltd. 2021</span>
    </footer>
  );
}

export default Footer;
