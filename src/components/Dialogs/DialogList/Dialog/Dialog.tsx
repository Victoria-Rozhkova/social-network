import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import module from "@/components/Dialogs/Dialogs.module.css";

type PropsTypes = {
  img: string;
  id: number | null;
  name: string;
};

export const Dialog: FC<PropsTypes> = ({ img, id, name }) => {
  return (
    <div className={module.dialog}>
      <img src={img} alt="img" />
      <NavLink
        className={({ isActive }) => (isActive ? module.active : "")}
        to={`/dialogs/${id}`}
      >
        {name}
      </NavLink>
    </div>
  );
};
