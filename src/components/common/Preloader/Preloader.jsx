import loader from '../../../assets/images/loader.gif';
import module from '../../Users/Users.module.css';
import React from 'react';

export const Preloader = (props) => {
  return <div className={module.loader}>
    <img src={loader} alt="loading" />
  </div>;
};