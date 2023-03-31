import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import Icon from "@/components/UI/Icon/icon";
import module from "@/components/logo/logo.module.css";

export const Logo: FC = () => {
  return (
    <NavLink to="/">
      <Icon name="Logo" size={40} className={module.logo} />
    </NavLink>
  );
};
