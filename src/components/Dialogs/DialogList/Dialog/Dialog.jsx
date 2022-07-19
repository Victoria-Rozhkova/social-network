import React from 'react';
import { NavLink } from 'react-router-dom';
import module from '../../Dialogs.module.css';

export const Dialog = ({ img, id, name }) => {
  return (
    <div className={module.dialog}>
      <img src={img} alt="img" />
      <NavLink className={({ isActive }) => isActive ? module.active : ''}
        to={`/dialogs/${id}`}>{name}</NavLink>
    </div >
  );
};