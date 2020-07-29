import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import AccountSettings from "../components/profile/accountSettings";
import Listings from "../components/profile/listings";
import SavedProperty from "../components/profile/savedProperty";
import Security from "../components/profile/security";
import Subscriptions from "../components/profile/subscriptions";
import SideMenu from "../components/profile/sideMenu";
import ProfileTitle from "../components/profile/profileTitle";
const useStyles = makeStyles((theme) => ({
  profileContainer: {
    background: "#F5E9DE",
    textAlign: "center",
    // width: `calc(100vw - 100px)`,
    // width: theme.spacing(20),
    margin: theme.spacing(20),
  },
  divider: {
    margin: theme.spacing(6, 0),
    height: 300,
    width: 1,
    background: theme.palette.primary.main,
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

const routes = [
  {
    path: "/profile-settings/account",
    main: () => <AccountSettings />,
    title: "Profile Settings",
  },
  {
    path: "/profile-settings/listings",
    main: () => <Listings />,
    title: "Listings",
  },
  {
    path: "/profile-settings/savedProperty",
    main: () => <SavedProperty />,
    title: "Saved Properties",
  },
  {
    path: "/profile-settings/security",
    main: () => <Security />,
    title: "Security",
  },
  {
    path: "/profile-settings/subscriptions",
    main: () => <Subscriptions />,
    title: "Subscriptions",
  },
];

const ProfileSettings = () => {
  const classes = useStyles();
  // const pathName = window.location.pathname.split("/")[1];

  return (
    <Router>
      <div className="BackgroundImage">
        {routes.map((route, index) => (
          <ProfileTitle>{route.title}</ProfileTitle>
        ))}

        <div className={classes.profileContainer}>
          <Grid container>
            <Grid item xs={3}>
              <SideMenu />
            </Grid>
            <Divider
              variant="middle"
              flexItem
              orientation="vertical"
              className={classes.divider}
            />
            <Grid item xs={8}>
              <Switch>
                {routes.map((route, index) => (
                  // This will render more <Route>s with the same paths as
                  // above, but different components.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Switch>
            </Grid>
          </Grid>
        </div>
      </div>
    </Router>
  );
};

export default ProfileSettings;
