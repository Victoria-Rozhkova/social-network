import React, { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { chatMessagesSelector } from "@/redux/selectors/chat.selectors";
import module from "@/components/Chat/chat.module.css";

type PropsType = { isAutoscroll: boolean };

export const ChatMessages: FC<PropsType> = React.memo(({ isAutoscroll }) => {
  const messages = useSelector(chatMessagesSelector);

  const messagesAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAutoscroll) {
      setTimeout(() => {
        messagesAnchorRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [messages, isAutoscroll]);

  return (
    <div className={module.chatMessages}>
      {messages.map((m) => {
        return (
          <div className={module.message} key={m.id}>
            <div className={module.userInfo}>
              <img className={module.avatar} src={m.photo} alt="avatar" />
              <span className={module.userName}>{m.userName}</span>
            </div>
            <div className={module.userMessage}>{m.message}</div>
            <div ref={messagesAnchorRef}></div>
          </div>
        );
      })}
    </div>
  );
});
