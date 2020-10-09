import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
//import ProfileImage from "../../pages/ProfileImage";

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

const SideMenu = ({ user }) => {
  const classes = useStyles();

  // console.table(props)
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

          <Typography className={classes.bigText}>{user.name}</Typography>
          <Link href="/profile-image" className={classes.link}>
            Click to change photo
          </Link>
        </Grid>
        <Grid item>
          <List>
            <Link href="/profile-settings/account" className={classes.link}>
              <Typography className={classes.bigText}>Edit Account</Typography>
            </Link>
            <Link href="/profile-settings/listings" className={classes.link}>
              <Typography className={classes.bigText}>Listings</Typography>
            </Link>
            <Link
              href="/profile-settings/subscriptions"
              className={classes.link}
            >
              <Typography className={classes.bigText}>Subscriptions</Typography>
            </Link>
            <Link
              href="/profile-settings/savedProperty"
              className={classes.link}
            >
              <Typography className={classes.bigText}>
                Saved Property
              </Typography>
            </Link>
            <Link href="/profile-settings/security" className={classes.link}>
              <Typography className={classes.bigText}>Security</Typography>
            </Link>
          </List>
        </Grid>
        <Grid>
          <List>
            <Link color="inherit" href="/login" className={classes.link}>
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
