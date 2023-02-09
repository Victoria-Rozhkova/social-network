import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { sendMessage, StatusesEnum } from "@/redux/chatReducer";
import { chatStatusSelector } from "@/redux/selectors/chatSelectors";
import module from "@/components/Chat/chat.module.css";

export const ChatAddMessageForm: FC = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const status = useSelector(chatStatusSelector);

  const sendMessageHandler = () => {
    if (value !== "") {
      dispatch(sendMessage(value) as any);
      setValue("");
    }
  };

  return (
    <div className={module.chatForm}>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        disabled={status !== StatusesEnum.Ready}
        onClick={sendMessageHandler}
      >
        Send
      </button>
    </div>
  );
};