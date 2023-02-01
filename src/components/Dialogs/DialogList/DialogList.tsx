import React, { FC } from "react";
import { useSelector } from "react-redux";

import { Dialog } from "./Dialog/Dialog";
import module from "../Dialogs.module.css";
import { dialogsSelector } from "src/redux/selectors/dialogsSelectors";

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
