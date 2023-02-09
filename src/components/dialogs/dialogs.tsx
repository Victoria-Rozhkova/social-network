import React, { FC } from "react";

import { Messages } from "@/components/dialogs/messages";
import { NewMessageForm } from "@/components/dialogs/new-message-form";
import { DialogList } from "@/components/dialogs/dialog-list";
import { withAuthRedirect } from "@/hoc/with-auth-redirect";
import module from "@/components/dialogs/dialogs.module.css";

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
