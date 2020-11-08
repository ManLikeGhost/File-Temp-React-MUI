import React, { useState, useEffect } from "react";

import { HashRouter, Switch, Route } from "react-router-dom";
import history from "./history";
import ProtectedRoute from "./util/ProtectedRoute";
// import { ACCESS_TOKEN_NAME } from "./constants/apiConstants";
import AuthService from "./services/auth.service";

import HomePage from "./pages/HomePage.jsx";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import UpgradeSubscriptionPage from "./pages/UpgradeSubscriptionPage";
import NewUpgradePage from "./pages/NewUpgrade";
import PaymentPage from "./pages/PaymentPage";
import PostPropertyRequestPage from "./pages/PostPropertyRequestPage";
import AddListingPage from "./pages/AddListingPage";

import ProfileSettings from "./pages/ProfileSettings";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import AboutPage from "./pages/AboutPage";
import FlatsPropertyDisplay from "./pages/FlatsPropertyDisplay";
import CommercialProjectsDisplay from "./pages/CommercialProjectsDisplay";
import HousesPropertyDisplay from "./pages/HousesPropertyDisplay";
import LandPropertyDisplay from "./pages/LandPropertyDisplay";
import BlogPage from "./pages/BlogPage";
import BlogPageArticle from "./pages/BlogPageArticle";
import ContactUsPage from "./pages/ContactUsPage";
import SinglePropertyPage from "./pages/SinglePropertyPage";

// import Page404 from "./pages/Page404";
import ProfileImage from "./pages/ProfileImage";
import SubscriptionPlans from "./pages/SubscriptionPlans";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
      maxWidth: "1980px",
    },
  },
}));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    async function fetchData() {
      let user = AuthService.getCurrentUser();
      if (user) {
        setCurrentUser(user);
        setIsAuthenticated(true);
      }
    }
    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.paperContainer}>
      <CssBaseline />
      <HashRouter history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            path="/properties/:propertyId"
            component={SinglePropertyPage}
          />

          <Route exact path="/contact-us">
            <ContactUsPage />
          </Route>
          <Route exact path="/blog-page">
            <BlogPage />
          </Route>

          <Route
            exact
            path="/blog-page/:articleId"
            component={BlogPageArticle}
          />
          <Route exact path="/flats-property-display">
            <FlatsPropertyDisplay />
          </Route>
          <Route exact path="/houses-property-display">
            <HousesPropertyDisplay />
          </Route>
          <Route exact path="/land-property-display">
            <LandPropertyDisplay />
          </Route>
          <Route exact path="/commercial-projects-display">
            <CommercialProjectsDisplay />
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

          <ProtectedRoute
            path="/profile-settings"
            component={ProfileSettings}
            isAuthenticated={isAuthenticated}
            user={currentUser}
          />

          <Route path="/profile-image">
            <ProfileImage />
          </Route>
          <Route path="/subscription-plans">
            <SubscriptionPlans />
          </Route>
          <Route path="/upgrade-subscription">
            <UpgradeSubscriptionPage />
          </Route>
          <Route path="/new-upgrade" component={NewUpgradePage} />

          <Route path="/payment">
            <PaymentPage />
          </Route>
          <Route path="/post-property-request">
            <PostPropertyRequestPage />
          </Route>
          <Route path="/add-listing">
            <AddListingPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          {/* <Route component={Page404} /> */}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
