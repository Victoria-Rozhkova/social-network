import React, { FC, useEffect, useState } from "react";
import module from "./Chat.module.css";

type PropsType = { ws: WebSocket | null };
type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

export const ChatMessages: FC<PropsType> = ({ ws }) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  useEffect(() => {
    const messageHandler = (e: MessageEvent) => {
      const newMessages: ChatMessageType[] = JSON.parse(e.data);
      setMessages((prev) => [...prev, ...newMessages]);
    };
    ws?.addEventListener("message", messageHandler);
    return () => {
      ws?.removeEventListener("message", messageHandler);
    };
  }, [ws]);
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
      <ChatAddMessageForm ws={ws} />
    </div>
  );
};

export const ChatAddMessageForm: FC<PropsType> = ({ ws }) => {
  const [value, setValue] = useState("");
  const [readyStatus, setReadyStatus] = useState<"pending" | "ready">(
    "pending"
  );

  useEffect(() => {
    const openHandler = () => {
      setReadyStatus("ready");
    };
    ws?.addEventListener("open", openHandler);
    return () => {
      ws?.removeEventListener("open", openHandler);
    };
  }, [ws]);

  const sendMessage = () => {
    if (value !== "") {
      ws?.send(value);
      setValue("");
    }
  };

  return (
    <div className={module.chatForm}>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        disabled={ws == null || readyStatus !== "ready"}
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
};
