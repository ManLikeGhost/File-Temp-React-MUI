import React from "react";
//Router

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfileSetting from "./pages/ProfileSetting";

import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import AboutPage from "./pages/AboutPage";

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
          <Route exact path="/About">
            <AboutPage />
          </Route>
          <Route exact path="/signin">
            <SignInPage />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>

          <Route path="/profile">
            <ProfileSetting />
          </Route>

          <Route exact path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
