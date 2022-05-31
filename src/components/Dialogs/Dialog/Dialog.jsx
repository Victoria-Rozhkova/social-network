import React from 'react';
import { NavLink } from 'react-router-dom';
import module from '../../Dialogs/Dialogs.module.css';

export const Dialog = (props) => {
  return (
    <div className={module.dialog}>
      <NavLink className={({ isActive }) => isActive ? module.active : ''}
        to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div >
  );
};