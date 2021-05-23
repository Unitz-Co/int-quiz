import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./TableHorizontal.styles";

class TableHorizontal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: []
    };
  }

  componentDidMount() {
    const { value } = this.props;

    this.setState({ value: value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    
    return (
      <div className={classes.tableHorizontalArea}>
        <span className="item"></span>
        {
          value
            .filter((item) => item.indexOf('Avatar') < 0)
            .map((item, key) => (
              <span className="item" key={key}>{item}</span>
            ))
        }
      </div>
    );
  }
}
export default withStyles(useStyles)(TableHorizontal);