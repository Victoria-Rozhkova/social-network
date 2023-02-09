import React, { FC } from "react";

import { Friends } from "@/components/Navbar/friends";
import { Navigate } from "@/components/Navbar/navigate";
import module from "@/components/Navbar/navbar.module.css";

export const Navbar: FC = () => {
  return (
    <div className={module.nav}>
      <Navigate />
      <Friends />
    </div>
  );
};
