import React from "react";

// import AuthService from "./services/auth.service";
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
import Marble from "../img/MarbleBackground.png";
import NavigationHeader from "../components/navigationHeader";
import ProfileTitle from "../components/profile/profileTitle"


const useStyles = makeStyles((theme) => ({
  root: {
    height: "500px",
    backgroundRepeat: "no-repeat",
    background: `url(${Marble}) no-repeat center center fixed`,
    backgroundSize: "cover",
  },
  profileContainer: {
    background: "#F5E9DE",
    textAlign: "center",
    // width: `calc(100vw - 100px)`,
    // width: theme.spacing(20),
    margin: theme.spacing(10),
    marginLeft: theme.spacing(40),
    border: "0.8px solid #BF7950",
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.25)",
    borderRadius: " 4px",
    height: "666px",
    width: "666px",
  },
  divider: {
    margin: theme.spacing(6, 0),
    height: 500,
    width: 1,
    background: theme.palette.primary.main,
  },
}));
// let currentUser = AuthService.getCurrentUser()

const routes = [
  {
    path: "/profile-settings/account",
    main: (user) => <AccountSettings user={user}/>,
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

const ProfileSettings = ({user}) => {
  const classes = useStyles();
  // const pathName = window.location.pathname.split("/")[1];

  return (
    <Router>
      <div className={classes.root}>
        <NavigationHeader />

        <ProfileTitle>Dashboard</ProfileTitle>
        <div className={classes.profileContainer}>
          <Grid container>
            <Grid item xs={3}>
              <SideMenu user={user}/>
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
                    children={<route.main user={user}/>}
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
