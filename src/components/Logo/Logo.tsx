import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import logo from "@/assets/images/logo.svg";
import module from "@/components/Logo/logo.module.css";

export const Logo: FC = () => {
  return (
    <NavLink to="/">
      <img className={module.logo} src={logo} alt="logo" />
    </NavLink>
  );
};
