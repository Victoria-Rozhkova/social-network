import React, { FC, useEffect, useState } from "react";
import { ChatAddMessageForm } from "./ChatAddMessageForm";
import { ChatMessages } from "./ChatMessages";
import module from "./Chat.module.css";

type PropsType = {};

export const Chat: FC<PropsType> = () => {
  const [wsChanel, setWsChanel] = useState<WebSocket | null>(null);

  useEffect(() => {
    let ws: WebSocket;
    const closeHandler = () => {
      console.log("close ws");
      createWsChanel();
    };
    function createWsChanel() {
      if (wsChanel !== null) {
        wsChanel.removeEventListener("close", closeHandler);
        wsChanel.close();
      }
      ws = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
      );
      ws.addEventListener("close", closeHandler);
      setWsChanel(ws);
    }
    createWsChanel();
    return () => {
      ws.removeEventListener("close", closeHandler);
      ws.close();
    };
  }, []);

  return (
    <div className={module.chat}>
      <ChatMessages ws={wsChanel} />
      {/* <ChatAddMessageForm ws={ws}  /> */}
    </div>
  );
};
