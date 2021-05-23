import React, { Component } from "react";
import { withStyles, useTheme } from "@material-ui/core/styles";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import { menuTop, menuBottom } from '../../helpers/common';

const drawerWidth = 240;

const useStyles = theme => ({
    drawer: {
        // width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    link: props => ({
        display: 'flex',
        width: '100%',
        color: props.color,
        '&:hover': {
            textDecoration: 'none',
        }
    }),
    linkItem: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    linkItemIcon: {
        minWidth: 'auto',
        paddingRight: 15,
        justifyContent: 'center',
        flexDirection: 'column',
    }
});

// Wrap and export
function HamburgerMenu(props) {
    const theme = useTheme();
    const { handleDrawerClose } = props;

    return (
        <IconButton onClick={handleDrawerClose}>
            { theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
    ); 
}

class NavbarBrand extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, open, handleDrawerClose } = this.props;
        
        return (
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <HamburgerMenu handleDrawerClose={handleDrawerClose} />
                    </div>
                    <Divider />
                    <List>
                        {menuTop.map((item, index) => (
                            <ListItem button key={index}>
                                <Link href={item.url} className={classes.link}>
                                    <ListItemIcon className={classes.linkItemIcon}>{item.icon}</ListItemIcon>
                                    <ListItemText className={classes.linkItem} primary={item.label} />
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {menuBottom.map((item, index) => (
                            <ListItem button key={index}>
                                <Link href='#' className={classes.link}>
                                    <ListItemIcon className={classes.linkItemIcon}>{item.icon}</ListItemIcon>
                                    <ListItemText className={classes.linkItem} primary={item.label} />
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </nav>
        );
    }
}
export default withStyles(useStyles)(NavbarBrand);

        
