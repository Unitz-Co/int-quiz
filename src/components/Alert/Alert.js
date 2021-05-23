import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import "./Alert.css";

const useStyles = theme => ({
});

class Alert extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { status, classes } = this.props;

        return (
            <div className={`alert ${!status && 'error'}`}>
                {/* <span className="closebtn">&times;</span>  */}
                <strong>{status ? 'Success' : 'Fail'}</strong>
            </div>
        );
    }
}
export default withStyles(useStyles)(Alert);