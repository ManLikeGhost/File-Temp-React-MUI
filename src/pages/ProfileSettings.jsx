import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AccountSettings from '../components/profile/accountSettings';
import Listings from '../components/profile/listings';
import SavedProperty from '../components/profile/savedProperty';
import Security from '../components/profile/security';
import Subscriptions from '../components/profile/subscriptions';
import SideMenu from '../components/profile/sideMenu';


const routes = [

  {
    path: "/profile-settings/account",
    main: () => <AccountSettings />
  },
  {
    path: "/profile-settings/listings",
    main: () => <Listings />
  },
  {
    path: "/profile-settings/savedProperty",
    main: () => <SavedProperty />
  },
  {
    path: "/profile-settings/security",
    main: () => <Security />
  },
  {
    path: "/profile-settings/subscriptions",
    main: () => <Subscriptions />
  }
];

export default function ProfileSettings() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
          <SideMenu />
        

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
