import React from 'react';
import module from '../../Dialogs.module.css';

export const Message = ({ img, message }) => {
  return <div className={module.message}>
    <img src={img} alt="img" />
    <p> {message}</p>
  </div>;
};