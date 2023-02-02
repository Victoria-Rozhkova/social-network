import React, { FC } from "react";

import { Friends } from "@/components/Navbar/Friends/Friends";
import { Navigate } from "@/components/Navbar/Navigate/Navigate";
import module from "@/components/Navbar/Navbar.module.css";

export const Navbar: FC = () => {
  return (
    <div className={module.nav}>
      <Navigate />
      <Friends />
    </div>
  );
};
