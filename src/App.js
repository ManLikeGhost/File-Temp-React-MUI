import React from "react";
//Router

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
      maxWidth: '1980px',
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
      <Router>
        <Switch>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
