import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dialog } from './Dialog/Dialog';
import module from './Dialogs.module.css';
import { Message } from './Message/Message';



const DialogItem = (props) => {

  const dialogElements = props.dialogs.map((dialog) => {
    return <li className={module.dialogsList}><Dialog name={dialog.name} id={dialog.id} /></li>;
  });

  return (
    <div className={module.dialogItem}>
      <h2 className={module.heading}>Dialogs</h2>
      <ul>{dialogElements}</ul>
    </div>
  );
};

const Messages = (props) => {
  const messageElements = props.messages.map((message) => {
    return <Message message={message.message} id={message.id} />;
  });
  return (
    <div className={module.messages}>
      {messageElements}
    </div>
  );
};

export const Dialogs = (props) => {
  return (
    <div className={module.dialogs}>
      <DialogItem dialogs={props.dialogs} />
      <Messages messages={props.messages} />
    </div>
  );
};