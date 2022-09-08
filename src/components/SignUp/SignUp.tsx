import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "src/redux/authReduser";
import {
  isAuthSelector,
  loginSelector,
} from "src/redux/selectors/authSelectors";
import { AppStateType } from "src/redux/store-redux";
import module from "./SignUp.module.css";

export const SignUp: FC = () => {
  const isAuth = useSelector((state: AppStateType) => isAuthSelector(state));
  const login = useSelector((state: AppStateType) => loginSelector(state));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout() as any);
  };
  return (
    <>
      {isAuth === undefined || isAuth === null || isAuth === false ? (
        <div className={module.logout}>
          <NavLink to="/login">Login</NavLink>
        </div>
      ) : (
        <div className={module.logout}>
          <p className={module.login}>{login}</p>{" "}
          <button onClick={onLogout}>Sign out</button>
        </div>
      )}
    </>
  );
};
