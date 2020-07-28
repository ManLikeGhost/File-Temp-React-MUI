import React from 'react';
import routes from "./routes";
import { Switch, Route, Redirect } from "react-router-dom";


const SwitchRoutes = () => (
  <Switch>
    {routes.map((route, key) => {
      if (route.layout === "/profile") {
        return (
          <Route
            path={route.layout + route.path}
            component={route.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/profile" to="/profile/listings" />
  </Switch>);

export default SwitchRoutes;