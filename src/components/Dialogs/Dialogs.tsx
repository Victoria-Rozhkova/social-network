import React, { FC } from "react";

import { Messages } from "@/components/Dialogs/Messages/Messages";
import { NewMessage } from "@/components/Dialogs/NewMessage/NewMessage";
import { DialogList } from "@/components/Dialogs/DialogList/DialogList";
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
