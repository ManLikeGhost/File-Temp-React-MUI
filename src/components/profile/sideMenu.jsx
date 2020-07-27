import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";

import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const menuList = [
  "Account",
  "Listings",
  "Subscriptions",
  "Saved Property",
  "Security",
];

const sideMenu = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {menuList.map((menu) => (
            <Link color="inherit" href="#" key={menu}>
              <ListItem button>
                <ListItemText primary={menu} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          <Link color="inherit" href="/login">
            <ListItem button>
              <ListItemText primary="Logout" />
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
};

export default sideMenu;
