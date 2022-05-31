import React from 'react';
import module from '../../Dialogs/Dialogs.module.css';

export const Message = (props) => {
  return <div className={module.message}>{props.message}</div>;
};