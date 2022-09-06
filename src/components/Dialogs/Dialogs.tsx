import React, { FC } from "react";
import { DialogList } from "./DialogList/DialogList";
import module from "./Dialogs.module.css";
import { Messages } from "./Messages/Messages";
import { DialogType, MessageType } from "src/redux/dialogsReduser";
import { NewMessage } from "./NewMessage/NewMessage";

type PropsType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
  sendNewMessage: (msg: string) => void;
};

export const Dialogs: FC<PropsType> = ({
  dialogs,
  messages,
  sendNewMessage,
}) => {
  return (
    <div className={module.dialogs}>
      <DialogList dialogs={dialogs} />
      <Messages messages={messages} />
      <NewMessage sendNewMessage={sendNewMessage} />
    </div>
  );
};
