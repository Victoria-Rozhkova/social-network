import React, { FC, useEffect, useState } from "react";
import module from "./Chat.module.css";

type PropsType = {};
type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

const ws = new WebSocket(
  "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);

export const ChatMessages: FC<PropsType> = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  useEffect(() => {
    ws.onmessage = (e: MessageEvent) => {
      const newMessages: ChatMessageType[] = JSON.parse(e.data);
      setMessages((prev) => [...prev, ...newMessages]);
    };
    return () => ws.close();
  }, []);
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
      <ChatAddMessageForm />
    </div>
  );
};

export const ChatAddMessageForm: FC<PropsType> = () => {
  const [value, setValue] = useState("");

  const sendMessage = () => {
    ws.send(value);
    setValue("");
  };

  return (
    <div className={module.chatForm}>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};
