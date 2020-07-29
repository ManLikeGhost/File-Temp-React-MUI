import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Link
} from "react-router-dom";
import List from "@material-ui/core/List";

import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
 
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
   
      <div>
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
              <Link to="/profile-settings/account">
                <Typography className={classes.bigText}>Account</Typography>
              </Link>
              <Link to="/profile-settings/listings">
                <Typography className={classes.bigText}>Listings</Typography>
              </Link>
              <Link to="/profile-settings/subscriptions">
                <Typography className={classes.bigText}>
                  Subscriptions
                </Typography>
              </Link>
              <Link to="/profile-settings/savedProperty">
                <Typography className={classes.bigText}>
                  Saved Property
                </Typography>
              </Link>
              <Link to="/profile-settings/security">
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
