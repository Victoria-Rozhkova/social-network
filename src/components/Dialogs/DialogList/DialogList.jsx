import React from 'react';
import { Dialog } from './Dialog/Dialog';
import module from '../Dialogs.module.css';

export const DialogList = ({ dialogs }) => {
  const dialogElements = dialogs.map((dialog) => {
    return <li key={dialog.id} className={module.dialogsList}>
      <Dialog name={dialog.name} id={dialog.id} img={dialog.img} /></li>;
  });
  return (
    <div className={module.dialogItem}>
      <h2 className={module.heading}>Dialogs</h2>
      <ul>{dialogElements}</ul>
    </div>
  );
};