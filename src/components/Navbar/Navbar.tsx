import React, { FC } from "react";

import { Friends } from "./Friends/Friends";
import module from "./Navbar.module.css";
import { Navigate } from "./Navigate/Navigate";

export const Navbar: FC = () => {

  return (
    <div className={module.nav}>
      <Navigate />
      <Friends />
    </div>
  );
};
