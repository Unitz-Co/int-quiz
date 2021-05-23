import React, { Component } from "react";
import clsx from 'clsx';
import { withStyles } from "@material-ui/core/styles";
import Drawer from "../../components/Drawer/Drawer";
import { AlertContext, alertContext } from "../../helpers/common.js";
import { getCookie } from "../../helpers/cookie";
import { isTrue } from "../../helpers/common";

const drawerWidth = 240;

const useStyles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  customContainer: {
    width: '100%',
    height: '100vh',
    paddingLeft: '0!important',
    paddingRight: '0!important',
    background: theme.palette.primary.main,

    '&.login': {
      background: 'transparent',
    }
  }
});
//isTrue(getCookie('signin'))
class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  openHandle = (status) => {
    this.setState({ open: status });
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <AlertContext.Provider value={alertContext}>
        <div>
          <div className={classes.customContainer + ' login container-fluid'}>
            {
              <Drawer openHandle={this.openHandle}>
                <main
                  className={clsx(classes.content, {
                    [classes.contentShift]: open,
                  })}
                >
                  <div className={classes.drawerHeader} />
                  <AlertContext.Consumer>{ value => this.props.children }</AlertContext.Consumer>
                </main>
              </Drawer>
            }
            {/* <NavMenu /> */}
          </div>
        </div>
      </AlertContext.Provider>
    );
  }
}
export default withStyles(useStyles)(Layout);

