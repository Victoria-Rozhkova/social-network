import React, { FC } from "react";
import { useSelector } from "react-redux";

import { messagesSelector } from "@/redux/selectors/dialogsSelectors";
import { Message } from "@/components/Dialogs/Messages/Message/Message";
import module from "@/components/Dialogs/Dialogs.module.css";

export const Messages: FC = () => {
  const messages = useSelector(messagesSelector);
  const messageElements = messages.map((message) => {
    return (
      <Message key={message.id} img={message.img} message={message.message} />
    );
  });
  return <div className={module.messages}>{messageElements}</div>;
};
