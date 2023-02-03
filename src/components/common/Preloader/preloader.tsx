import React, { FC } from "react";

import loader from "@/assets/images/loader.gif";
import module from "@/components/common/Preloader/preloader.module.css";

export const Preloader: FC = () => {
  return (
    <div className={module.preloader}>
      <img src={loader} alt="loading..." />
    </div>
  );
};
