import React, { FC } from "react";
import { useSelector } from "react-redux";

import { Dialog } from "@/components/Dialogs/DialogList/Dialog/Dialog";
import { dialogsSelector } from "@/redux/selectors/dialogsSelectors";
import module from "@/components/Dialogs/Dialogs.module.css";

export const DialogList: FC = () => {
  const dialogs = useSelector(dialogsSelector);

  const dialogElements = dialogs.map((dialog) => {
    return (
      <li key={dialog.id} className={module.dialogsList}>
        <Dialog name={dialog.name} id={dialog.id} img={dialog.img} />
      </li>
    );
  });
  return (
    <div className={module.dialogItem}>
      <h2 className={module.heading}>Dialogs</h2>
      <ul>{dialogElements}</ul>
    </div>
  );
};
