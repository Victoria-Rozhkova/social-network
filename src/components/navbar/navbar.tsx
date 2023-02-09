import React, { FC } from "react";

import { Friends } from "@/components/navbar/friends";
import { Navigate } from "@/components/navbar/navigate";
import module from "@/components/navbar/navbar.module.css";

export const Navbar: FC = () => {
  return (
    <div className={module.nav}>
      <Navigate />
      <Friends />
    </div>
  );
};
