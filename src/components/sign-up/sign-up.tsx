import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "@/redux/auth.reducer";
import {
  isAuthSelector,
  loginSelector,
} from "@/redux/selectors/auth.selectors";
import module from "@/components/sign-up/sign-up.module.css";

export const SignUp: FC = () => {
  const isAuth = useSelector(isAuthSelector);
  const login = useSelector(loginSelector);
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
          <NavLink to={"/profile"} className={module.login}>
            {login}
          </NavLink>
          <button onClick={onLogout}>Sign out</button>
        </div>
      )}
    </>
  );
};
