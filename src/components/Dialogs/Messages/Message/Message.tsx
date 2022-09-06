import React, { FC } from "react";
import module from "../../Dialogs.module.css";

type PropsType = {
  img: string;
  message: string;
};

export const Message: FC<PropsType> = ({ img, message }) => {
  return (
    <div className={module.message}>
      <img src={img} alt="img" />
      <p>{message}</p>
    </div>
  );
};
