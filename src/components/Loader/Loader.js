import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./Loader.styles";

class Loader extends Component {
  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <div id="loading">
            <div className={classes.loader}></div>
            <div className={classes.loader2}></div>
            <div className={classes.loader3}></div>
            <div className={classes.loader4}></div>
            <span className={classes.text}>LOADING...</span><br/>
      </div>
    );
  }
}
export default withStyles(useStyles)(Loader);