import loader from "../../../assets/images/loader.gif";
import module from "../../Users/Users.module.css";
import React, { FC } from "react";

export const Preloader: FC = () => {
  return (
    <div className={module.loader}>
      <img src={loader} alt="loading..." />
    </div>
  );
};
