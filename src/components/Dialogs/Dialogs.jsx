import React from 'react';
import { DialogList } from './DialogList/DialogList';
import module from './Dialogs.module.css';
import { NewMessageContainer } from './NewMessage/NewMessageContainer';
import { Messages } from './Messages/Messages';

export const Dialogs = (props) => {
  const state = props.store.getState();
  return (
    <div className={module.dialogs}>
      <DialogList dialogs={state.dialogsPage.dialogs} />
      <Messages messages={state.dialogsPage.messages} />
      <NewMessageContainer store={props.store} />
    </div>
  );
};