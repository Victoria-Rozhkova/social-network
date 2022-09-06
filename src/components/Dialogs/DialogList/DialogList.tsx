import React, { FC } from "react";
import { Dialog } from "./Dialog/Dialog";
import module from "../Dialogs.module.css";
import { DialogType } from "src/redux/dialogsReduser";

type PropsTypes = {
  dialogs: Array<DialogType>;
};

export const DialogList: FC<PropsTypes> = ({ dialogs }) => {
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
