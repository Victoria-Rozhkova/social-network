import React, { FC, useEffect } from "react";
import { ChatAddMessageForm } from "./ChatAddMessageForm";
import { ChatMessages } from "./ChatMessages";
import module from "./Chat.module.css";
import { useDispatch } from "react-redux";
import {
  startMessagesListening,
  stopMessagesListening,
} from "src/redux/chatReducer";

type PropsType = {};

export const Chat: FC<PropsType> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startMessagesListening() as any);
    return () => {
      dispatch(stopMessagesListening() as any);
    };
  }, []);

  return (
    <div className={module.chat}>
      <ChatMessages />
      <ChatAddMessageForm />
    </div>
  );
};
