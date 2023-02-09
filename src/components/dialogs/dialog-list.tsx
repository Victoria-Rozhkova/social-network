import React, { FC } from "react";
import { useSelector } from "react-redux";

import { Dialog } from "@/components/dialogs/dialog";
import { dialogsSelector } from "@/redux/selectors/dialogs.selectors";
import module from "@/components/dialogs/dialogs.module.css";

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
