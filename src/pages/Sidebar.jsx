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
    path: "/sidebar/account",
    main: () => <AccountSettings />
  },
  {
    path: "/sidebar/listings",
    main: () => <Listings />
  },
  {
    path: "/sidebar/savedProperty",
    main: () => <SavedProperty />
  },
  {
    path: "/sidebar/security",
    main: () => <Security />
  },
  {
    path: "/sidebar/subscriptions",
    main: () => <Subscriptions />
  }
];

export default function Sidebar() {
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
