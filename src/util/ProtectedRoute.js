import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/signin", state: { from: location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;

// import React from "react";
// import { Redirect, Route, useLocation } from "react-router-dom";

// const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
//   const location = useLocation();

//   return (
//     <Route {...rest}>
//       {isAuthenticated === true ?
//         <Component />
//       :
//         <Redirect to={{ pathname: "/signin", state: { from: location } }} />
//       }
//     </Route>
//   );
// };

// export default ProtectedRoute;
