import React from 'react';
import error from '../../assets/images/404.png';
import module from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={module.notFound}>
      <img src={error} alt="error" />
    </div>);
};
export default NotFound;