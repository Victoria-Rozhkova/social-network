// import logo from './logo.svg';
import React from 'react';
import { NavLink } from 'react-router-dom';
import module from './Header.module.css';

export const Header = ({ isAuth, login, logout }) => {
  return (
    <header className={module.header}>
      <NavLink to='/'>
        <img className={module.logo} src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg" alt="logo" />
      </NavLink>
      {isAuth === undefined || isAuth === null || isAuth === false ? <NavLink to='/login'>Login</NavLink> : <div className={module.logout}><p>{login}</p> <button onClick={logout}>Sign out</button> </div>}
    </header>
  );
};