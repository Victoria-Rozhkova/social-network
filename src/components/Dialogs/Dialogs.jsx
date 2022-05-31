import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dialog } from './Dialog/Dialog';
import module from './Dialogs.module.css';
import { Message } from './Message/Message';

const dialogs = [
  { id: 1, name: 'Ann', },
  { id: 2, name: 'Sam', },
  { id: 3, name: 'John', },
];

const messages = [
  { id: 1, message: 'Hi' },
  { id: 1, message: 'How are you?' },
];

const DialogItem = (props) => {
  return (
    <div className={module.dialogItem}>
      <h2 className={module.heading}>Dialogs</h2>
      <ul>{dialogElements}</ul>
    </div>
  );
};

const Messages = () => {
  return (
    <div className={module.messages}>
      {messageElements}
    </div>
  );
};
const dialogElements = dialogs.map((dialog) => {
  return <li className={module.dialogsList}><Dialog name={dialog.name} id={dialog.id} /></li>;
});

const messageElements = messages.map((message) => {
  return <Message message={message.message} id={message.id} />;
});
export const Dialogs = () => {
  return (
    <div className={module.dialogs}>
      <DialogItem />
      <Messages />
    </div>
  );
};