import React, { useContext } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { AuthContext } from "./userContext";





const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  else{
  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );}
};


export default withRouter(PrivateRoute);
