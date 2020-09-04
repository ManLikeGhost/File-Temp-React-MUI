import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
// import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(20),
    // width: theme.spacing(20),
  },
  bigAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    color: theme.palette.primary.main,
  },
  link: {
    underline: "none",
    textDecoration: "none",
  },
  bigText: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "3rem",
    textAlign: "center",
    color: "#04403A",
  },
  inputUpload: {
    display: "none",
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
        <Grid container direction="column" justify="center" alignItems="center">
          <Avatar
            alt="terrel davies"
            src=""
            className={classes.bigAvatar}
            fontSize="large"
            color="primary"
          />

          <Typography className={classes.bigText}>John Doe</Typography>
          <Link href="/profileImage" className={classes.link}>
            <Typography>Click to change photo</Typography>
          </Link>
        </Grid>
        <Grid item>
          <List>
            <Link to="/profile-settings/account" className={classes.link}>
              <Typography className={classes.bigText}>Account</Typography>
            </Link>
            <Link to="/profile-settings/listings" className={classes.link}>
              <Typography className={classes.bigText}>Listings</Typography>
            </Link>
            <Link to="/profile-settings/subscriptions" className={classes.link}>
              <Typography className={classes.bigText}>Subscriptions</Typography>
            </Link>
            <Link to="/profile-settings/savedProperty" className={classes.link}>
              <Typography className={classes.bigText}>
                Saved Property
              </Typography>
            </Link>
            <Link to="/profile-settings/security" className={classes.link}>
              <Typography className={classes.bigText}>Security</Typography>
            </Link>
          </List>
        </Grid>
        <Grid>
          <List>
            <Link color="inherit" to="/login" className={classes.link}>
              <Typography className={classes.bigText}>
                Logout
                <ExitToAppIcon color="primary" />
              </Typography>
            </Link>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default SideMenu;
