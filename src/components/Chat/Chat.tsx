import React, { FC } from "react";
import { ChatAddMessageForm } from "./ChatAddMessageForm";
import { ChatMessages } from "./ChatMessages";
import module from "./Chat.module.css";

type PropsType = {};

export const Chat: FC<PropsType> = () => {
  return (
    <div className={module.chat}>
      <ChatMessages />
      {/* <ChatAddMessageForm /> */}
    </div>
  );
};
