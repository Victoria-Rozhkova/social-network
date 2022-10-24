import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "src/redux/chatReducer";
import module from "./Chat.module.css";

type PropsType = {};

export const ChatAddMessageForm: FC<PropsType> = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const sendMessageHandler = () => {
    if (value !== "") {
      dispatch(sendMessage(value) as any);
      setValue("");
    }
  };

  return (
    <div className={module.chatForm}>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <button disabled={false} onClick={sendMessageHandler}>
        Send
      </button>
    </div>
  );
};
