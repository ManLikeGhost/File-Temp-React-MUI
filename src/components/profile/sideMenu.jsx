import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AccountSettings from "./accountSettings";
import ContentSection from "./contentSection";
// const routes = [
//   {
//     path: "/",
//     exact: true,
//     sidebar: () => <div>ContentSection</div>,
//     main: () => <ContentSection />,
//   },
//   {
//     path: "/bubblegum",
//     sidebar: () => <div>AccountSettings</div>,
//     main: () => <AccountSettings />,
//   },
// ];

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F5E9DE",
    textAlign: "center",
    width: `calc(100vw - 48px)`,
  },

  bigAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    color: theme.palette.primary.main,
  },
  bigText: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "3rem",
    textAlign: "center",
    color: "#04403A",
  },
}));

const SideMenu = () => {
  const classes = useStyles();

  return (
   
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Avatar
              alt="terrel davies"
              src=""
              className={classes.bigAvatar}
              fontSize="large"
              color="primary"
            />

            <Typography className={classes.bigText}>John Doe</Typography>
            <Link>
              <Typography>Click to change photo</Typography>
            </Link>
          </Grid>
          <Grid item>
            <List>
              <Link color="inherit" href="/account">
                <Typography className={classes.bigText}>Account</Typography>
              </Link>
              <Link color="inherit" href="/listings">
                <Typography className={classes.bigText}>Listings</Typography>
              </Link>
              <Link color="inherit" href="/subscriptions">
                <Typography className={classes.bigText}>
                  Subscriptions
                </Typography>
              </Link>
              <Link color="inherit" href="/saved-property">
                <Typography className={classes.bigText}>
                  Saved Property
                </Typography>
              </Link>
              <Link color="inherit" href="/security">
                <Typography className={classes.bigText}>Security</Typography>
              </Link>
            </List>
          </Grid>
          <Grid>
            <List>
              <Link color="inherit" href="/login">
                <Typography className={classes.bigText}>
                  Logout
                  <ExitToAppIcon />
                </Typography>
              </Link>
            </List>
          </Grid>
        </Grid>
      </div>
      
  );
};

export default SideMenu;
