import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ChatAddMessageForm } from "./ChatAddMessageForm";
import { ChatMessages } from "./ChatMessages";
import module from "./Chat.module.css";
import {
  startMessagesListening,
  StatusesEnum,
  stopMessagesListening,
} from "src/redux/chatReducer";
import { chatStatusSelector } from "src/redux/selectors/chatSelectors";

type PropsType = {};

export const Chat: FC<PropsType> = React.memo(() => {
  const [isAutoscroll, setIsAutoScroll] = useState(true);

  const status = useSelector(chatStatusSelector);

  const dispatch = useDispatch();

  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget;
    if (
      Math.abs(
        element.scrollHeight - element.scrollTop - element.clientHeight
      ) < 300
    ) {
      !isAutoscroll && setIsAutoScroll(true);
    } else {
      setIsAutoScroll(false);
    }
  };

  useEffect(() => {
    dispatch(startMessagesListening() as any);
    return () => {
      dispatch(stopMessagesListening() as any);
    };
  }, [dispatch]);

  return (
    <div className={module.chat} onScroll={scrollHandler}>
      <ChatMessages isAutoscroll={isAutoscroll} />
      {status === StatusesEnum.Error &&
        "Some error occured. Please refresh page"}
      <ChatAddMessageForm />
    </div>
  );
});
