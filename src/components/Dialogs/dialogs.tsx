import React, { FC } from "react";

import { Messages } from "@/components/Dialogs/messages";
import { NewMessageForm } from "@/components/Dialogs/new-message-form";
import { DialogList } from "@/components/Dialogs/dialog-list";
import { withAuthRedirect } from "@/hoc/withAuthRedirect";
import module from "@/components/Dialogs/dialogs.module.css";

const Dialogs: FC = () => {
  return (
    <div className={module.dialogs}>
      <DialogList />
      <Messages />
      <NewMessageForm />
    </div>
  );
};
export default withAuthRedirect(Dialogs);
