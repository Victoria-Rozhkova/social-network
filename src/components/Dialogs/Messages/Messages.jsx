import React from 'react';
import module from '../Dialogs.module.css';
import { Message } from './Message/Message';

export const Messages = (props) => {
  const messageElements = props.messages.map((message) => {
    return <Message img={message.img} message={message.message} id={message.id} />;
  });
  return (
    <div key={props.messages.id} className={module.messages}>
      {messageElements}
    </div>
  );
};