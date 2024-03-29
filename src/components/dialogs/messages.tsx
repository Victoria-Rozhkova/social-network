import React, { FC } from "react";
import { useSelector } from "react-redux";

import { messagesSelector } from "@/redux/selectors/dialogs.selectors";
import { Message } from "@/components/dialogs/message";
import module from "@/components/dialogs/dialogs.module.css";

export const Messages: FC = () => {
  const messages = useSelector(messagesSelector);
  const messageElements = messages.map((message) => {
    return (
      <Message key={message.id} img={message.img} message={message.message} />
    );
  });
  return <div className={module.messages}>{messageElements}</div>;
};
