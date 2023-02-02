import React, { FC } from "react";

import loader from "@/assets/images/loader.gif";
import module from "@/components/Users/Users.module.css";

export const Preloader: FC = () => {
  return (
    <div className={module.loader}>
      <img src={loader} alt="loading..." />
    </div>
  );
};
