import React, { FC } from "react";
import { Matching } from "react-redux";
import { DialogType } from "src/redux/dialogsReduser";
import { Friends } from "./Friends/Friends";
import module from "./Navbar.module.css";
import { Navigate } from "./Navigate/Navigate";

type PropsTypes = {
  friends: Array<DialogType>;
};

export const Navbar: FC<Matching<PropsTypes, PropsTypes> & PropsTypes> = ({
  friends,
}) => {
  return (
    <div className={module.nav}>
      <Navigate />
      <Friends friends={friends} />
    </div>
  );
};
