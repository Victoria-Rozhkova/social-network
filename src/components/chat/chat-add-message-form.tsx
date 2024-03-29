import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { sendMessage, StatusesEnum } from "@/redux/chat.reducer";
import { chatStatusSelector } from "@/redux/selectors/chat.selectors";
import module from "@/components/chat/chat.module.css";

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
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus={status !== StatusesEnum.Ready}
      />
      <button
        disabled={status !== StatusesEnum.Ready}
        onClick={sendMessageHandler}
        className={module.btn}
      >
        Send
      </button>
    </div>
  );
};
