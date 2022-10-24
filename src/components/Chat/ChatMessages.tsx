import React, { FC } from "react";
import { useSelector } from "react-redux";
import { chatMessagesSelector } from "src/redux/selectors/chatSelectors";
import module from "./Chat.module.css";

type PropsType = {};

export const ChatMessages: FC<PropsType> = () => {
  const messages = useSelector(chatMessagesSelector);

  return (
    <div className={module.chatMessages}>
      {messages.map((m, i) => {
        return (
          <div className={module.message} key={i}>
            <div className={module.userInfo}>
              <img className={module.avatar} src={m.photo} alt="avatar" />
              <span className={module.userName}>{m.userName}</span>
            </div>
            <div className={module.userMessage}>{m.message}</div>
          </div>
        );
      })}
    </div>
  );
};
