import React, { FC } from "react";
import { MessageType } from "src/redux/dialogsReduser";
import module from "../Dialogs.module.css";
import { Message } from "./Message/Message";

type PropsType = {
  messages: Array<MessageType>;
};

export const Messages: FC<PropsType> = ({ messages }) => {
  const messageElements = messages.map((message) => {
    return (
      <Message key={message.id} img={message.img} message={message.message} />
    );
  });
  return <div className={module.messages}>{messageElements}</div>;
};
