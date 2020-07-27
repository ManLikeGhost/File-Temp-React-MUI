import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const drawerWidth = 268;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    padding: "50px"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  bigAvatar: {
    width: 60,
    height: 60,
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
        {/* <div className={classes.toolbar} /> */}
        <Avatar alt="Ridbay" src="" className={classes.bigAvatar} />
        <Typography>John Doe</Typography>
        <Link>
          <Typography>Click to change photo</Typography>
        </Link>
       
        <List>
          {menuList.map((menu) => (
            <Link color="inherit" href="#" key={menu}>
              <ListItem button>
                <ListItemText primary={menu} />
              </ListItem>
            </Link>
          ))}
        </List>
       
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
      <Divider orientation="vertical" flexItem color="primary"/>
    </div>
  );
};

export default sideMenu;
