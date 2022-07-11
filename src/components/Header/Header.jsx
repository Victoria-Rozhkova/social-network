// import logo from './logo.svg';
import React from 'react';
import { NavLink } from 'react-router-dom';
import module from './Header.module.css';

export const Header = (props) => {
  return (
    <header className={module.header}>
      <NavLink to='/'>
        <img className={module.logo} src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg" alt="logo" />
      </NavLink>
      {props.isAuth === undefined || props.isAuth === null || props.isAuth === false ? <NavLink to='/login'>Login</NavLink> : <div className={module.logout}><p>{props.login}</p> <button onClick={props.logout}>Sign out</button> </div>}
    </header>
  );
};