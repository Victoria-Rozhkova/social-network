import React, { FC } from "react";
import module from "./Chat.module.css";

type PropsType = {};

export const ChatAddMessageForm: FC<PropsType> = () => {
  return (
    <div className={module.chatForm}>
      {/* <textarea/>
    <button>Send</button> */}
    </div>
  );
};
