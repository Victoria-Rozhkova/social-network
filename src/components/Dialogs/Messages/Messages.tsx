import React, { FC } from "react";
import { useSelector } from "react-redux";
import { messagesSelector } from "src/redux/selectors/dialogsSelectors";

import module from "../Dialogs.module.css";
import { Message } from "./Message/Message";

export const Messages: FC = () => {
  const messages = useSelector(messagesSelector);
  const messageElements = messages.map((message) => {
    return (
      <Message key={message.id} img={message.img} message={message.message} />
    );
  });
  return <div className={module.messages}>{messageElements}</div>;
};
