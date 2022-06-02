import React from 'react';
import { Dialog } from './Dialog/Dialog';
import module from './Dialogs.module.css';
import { Message } from './Message/Message';
import { NewMessage } from './NewMessage/NewMessage';



const DialogItem = (props) => {

  const dialogElements = props.dialogs.map((dialog) => {
    return <li className={module.dialogsList}><Dialog name={dialog.name} id={dialog.id} img={dialog.img} /></li>;
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
    return <Message img={message.img} message={message.message} id={message.id} />;
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
      <DialogItem dialogs={props.state.dialogs} />
      <Messages messages={props.state.messages} />
      <NewMessage />
    </div>
  );
};