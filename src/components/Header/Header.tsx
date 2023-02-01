import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "src/redux/authReduser";
import {
  isAuthSelector,
  loginSelector,
} from "src/redux/selectors/authSelectors";
import { useAppDispatch } from "src/redux/store-redux";
import { Logo } from "../Logo/Logo";
import module from "./Header.module.css";

export const Header: FC = () => {
  const isAuth = useSelector(isAuthSelector);
  const login = useSelector(loginSelector);

  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout() as any);
  };

  return (
    <header className={module.header}>
      <Logo/>
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
