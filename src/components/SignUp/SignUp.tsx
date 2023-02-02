import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "@/redux/authReduser";
import { isAuthSelector, loginSelector } from "@/redux/selectors/authSelectors";
import module from "@/components/SignUp/SignUp.module.css";

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
          <p className={module.login}>{login}</p>
          <button onClick={onLogout}>Sign out</button>
        </div>
      )}
    </>
  );
};
