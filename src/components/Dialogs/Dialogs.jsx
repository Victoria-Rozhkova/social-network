import React from 'react';
import module from './Dialogs.module.css';

export const Dialogs = () => {
  return (
    <div className={module.dialogs}>
      <div className={module.dialogItem}>
        <div className={module.dialog}>Ann</div>
        <div className={module.dialog}>Sam</div>
        <div className={module.dialog}>John</div>
      </div>
      <div className={module.messages}>
        <div className={module.message}>Hi</div>
        <div className={module.message}>How are you?</div>
      </div>
    </div>
  );
};