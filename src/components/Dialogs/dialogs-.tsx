import React, { FC } from "react";

import { Messages } from "@/components/Dialogs/messages";
import { NewMessage } from "@/components/Dialogs/new-message-form";
import { DialogList } from "@/components/Dialogs/dialog-list";
import { withAuthRedirect } from "@/hoc/withAuthRedirect";
import module from "@/components/Dialogs/Dialogs.module.css";

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
