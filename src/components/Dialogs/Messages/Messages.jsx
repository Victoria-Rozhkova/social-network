import React from 'react';
import module from '../Dialogs.module.css';
import { Message } from './Message/Message';

export const Messages = ({ messages }) => {
  const messageElements = messages.map((message) => {
    return <Message key={message.id} img={message.img} message={message.message} id={message.id} />;
  });
  return (
    <div className={module.messages}>
      {messageElements}
    </div>
  );
};