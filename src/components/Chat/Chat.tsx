import React, { FC, useEffect } from "react";
import { ChatAddMessageForm } from "./ChatAddMessageForm";
import { ChatMessages } from "./ChatMessages";
import module from "./Chat.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  startMessagesListening,
  StatusesEnum,
  stopMessagesListening,
} from "src/redux/chatReducer";
import { chatStatusSelector } from "src/redux/selectors/chatSelectors";

type PropsType = {};

export const Chat: FC<PropsType> = () => {
  const status = useSelector(chatStatusSelector);

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
      {status === StatusesEnum.Error &&
        "Some error occured. Please refresh page"}
      <ChatAddMessageForm />
    </div>
  );
};
