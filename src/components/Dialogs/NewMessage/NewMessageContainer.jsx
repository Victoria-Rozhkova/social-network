import React from 'react';
import { updateTextMessageActionCreator, sendNewMessageActionCreator } from '../../../redux/dialogsReduser';
import { NewMessage } from './NewMessage';

export const NewMessageContainer = (props) => {

  const state = props.store.getState();

  const sendNewMessage = () => {
    props.store.dispatch(sendNewMessageActionCreator());
  };

  const onChangeTextMessage = (message) => {
    props.store.dispatch(updateTextMessageActionCreator(message));
  };

  return (
    <NewMessage newMessage={state.dialogsPage.newMessage}
      updateTextMessage={onChangeTextMessage}
      sendNewMessage={sendNewMessage} />
  );
};