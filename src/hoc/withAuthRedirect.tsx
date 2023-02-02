import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import { isAuthSelector } from "@/redux/selectors/authSelectors";
import { AppStateType } from "@/redux/store-redux";

type MapStateToPropsType = {
  isAuth: boolean;
};

const MapStateToPropsForRedirect = (state: AppStateType) => {
  return {
    isAuth: isAuthSelector(state),
  };
};

export const withAuthRedirect = <WCP,>(Component: any) => {
  const RedirectComponent = (props: MapStateToPropsType) => {
    const { isAuth, ...restProps } = props;
    if (isAuth === false) return <Navigate to="/login" />;
    return <Component {...(restProps as WCP)} />;
  };
  const ConnectedAuthRedirectComponent = connect<
    MapStateToPropsType,
    {},
    WCP,
    AppStateType
  >(
    MapStateToPropsForRedirect,
    {}
  )(RedirectComponent);
  return ConnectedAuthRedirectComponent;
};
