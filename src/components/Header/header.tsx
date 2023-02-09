import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "@/redux/auth.reducer";
import {
  isAuthSelector,
  loginSelector,
} from "@/redux/selectors/auth.selectors";
import { useAppDispatch } from "@/redux/store-redux";
import { Logo } from "@/components/Logo/logo";
import module from "@/components/Header/header.module.css";

export const Header: FC = () => {
  const isAuth = useSelector(isAuthSelector);
  const login = useSelector(loginSelector);

  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout() as any);
  };

  return (
    <header className={module.header}>
      <Logo />
      {isAuth === undefined || isAuth === null || isAuth === false ? (
        <NavLink to="/login">Login</NavLink>
      ) : (
        <div className={module.logout}>
          <p>{login}</p> <button onClick={onLogout}>Sign out</button>
        </div>
      )}
    </header>
  );
};
