import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const MapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {

    if (props.isAuth === false) return <Navigate to="/login" />;
    return <Component {...props} />;
  };
  const ConnectedAuthRedirectComponent = connect(MapStateToPropsForRedirect, {})(RedirectComponent);
  return ConnectedAuthRedirectComponent;
};







