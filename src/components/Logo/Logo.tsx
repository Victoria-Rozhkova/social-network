import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import module from "./Logo.module.css";
import logo from '../../assets/images/logo.svg'

export const Logo: FC = () => {
  return (
    <NavLink to="/">
      <img className={module.logo} src={logo} alt="logo" />
    </NavLink>
  );
};
