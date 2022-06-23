import React from 'react';
import { DialogList } from './DialogList/DialogList';
import module from './Dialogs.module.css';
import NewMessageContainer from './NewMessage/NewMessageContainer';
import { Messages } from './Messages/Messages';
import { Navigate } from "react-router-dom";

export const Dialogs = (props) => {
  if (props.isAuth === false) {
    return <Navigate to="/login" />;
  }
  else {
    return (
      <div className={module.dialogs}>
        <DialogList dialogs={props.dialogs} />
        <Messages messages={props.messages} />
        <NewMessageContainer />
      </div>
    );
  };
};
