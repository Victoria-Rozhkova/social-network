import React, { FC } from "react";
import { withAuthRedirect } from "src/hoc/withAuthRedirect";
import { DialogList } from "./DialogList/DialogList";
import module from "./Dialogs.module.css";
import { Messages } from "./Messages/Messages";
import { NewMessage } from "./NewMessage/NewMessage";

const Dialogs: FC = () => {
  return (
    <div className={module.dialogs}>
      <DialogList />
      <Messages />
      <NewMessage />
    </div>
  );
};
export default withAuthRedirect(Dialogs);
