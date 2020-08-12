import React from "react";
//Router

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import UpgradeSubscriptionPage from "./pages/UpgradeSubscriptionPage";
import NewUpgradePage from "./pages/NewUpgrade";

import ProfileSettings from "./pages/ProfileSettings";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import AboutPage from "./pages/AboutPage";
import ForRent from "./components/listings/forRent";

import Page404 from "./pages/Page404";
import ProfileImage from "./pages/ProfileImage";
import SubscriptionPlans from "./pages/SubscriptionPlans";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
      maxWidth: "1980px",
    },
  },
  // paperContainer: {
  //   height: "100vh",
  //   backgroundImage: `url(${MarbleBackground})`,
  // },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.paperContainer}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/forRent">
            <ForRent />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/signin">
            <SignInPage />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/profile-settings">
            <ProfileSettings />
          </Route>
          <Route path="/profile-image">
            <ProfileImage />
          </Route>

          <Route path="/subscription-plans">
            <SubscriptionPlans />
          </Route>
          <Route path="/upgrade-subscription">
            <UpgradeSubscriptionPage />
          </Route>
          <Route path="/new-upgrade">
            <NewUpgradePage />
          </Route>
          
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
