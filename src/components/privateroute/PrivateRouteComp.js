import React from "react";
import { Route, Redirect } from "react-router-dom";
import DefaultLayout from "../../layout/DefaultLayout";

const PrivateRouteComp = ({ children, ...rest }) => {
  const isAuth = true;
  return (
    <Route
      exact
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRouteComp;
