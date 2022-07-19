import React from 'react';
import { DialogList } from './DialogList/DialogList';
import module from './Dialogs.module.css';
import NewMessageContainer from './NewMessage/NewMessageContainer';
import { Messages } from './Messages/Messages';

export const Dialogs = ({ dialogs, messages }) => {
  return (
    <div className={module.dialogs}>
      <DialogList dialogs={dialogs} />
      <Messages messages={messages} />
      <NewMessageContainer />
    </div>
  );
};
