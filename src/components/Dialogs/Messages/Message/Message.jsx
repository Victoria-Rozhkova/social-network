import React from 'react';
import module from '../../Dialogs.module.css';

export const Message = (props) => {
  return <div className={module.message}>
    <img src={props.img} alt="img" />
    <p> {props.message}</p>
  </div>;
};