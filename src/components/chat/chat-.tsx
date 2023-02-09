import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ChatMessages } from "@/components/chat/chat-messages";
import { ChatAddMessageForm } from "@/components/chat/chat-add-message-form";
import { chatStatusSelector } from "@/redux/selectors/chat.selectors";
import {
  startMessagesListening,
  StatusesEnum,
  stopMessagesListening,
} from "@/redux/chat.reducer";
import module from "@/components/chat/chat.module.css";
import { withAuthRedirect } from "@/hoc/with-auth-redirect";

const Chat: FC = React.memo(() => {
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

export default withAuthRedirect(Chat);
