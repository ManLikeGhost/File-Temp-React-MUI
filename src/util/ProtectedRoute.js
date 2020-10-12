import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isauthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isauthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/signin", state: { from: props.location } }}
        />
      )
    }
  />
);

export default ProtectedRoute;
