import React from 'react';
import { NavLink } from 'react-router-dom';
import module from '../Navbar.module.css';

export const Navigate = (props) => {
  return (
    <nav>
      <div className={module.navbar}>
        <NavLink className={({ isActive }) => isActive ? module.active : ''} to="/profile">Profile</NavLink></div>
      <div className={module.navbar}>
        <NavLink className={({ isActive }) => isActive ? module.active : ''} to="/dialogs">Messages</NavLink></div>
      <div className={module.navbar}>
        <NavLink className={({ isActive }) => isActive ? module.active : ''} to="/news">News</NavLink></div>
      <div className={module.navbar}>
        <NavLink className={({ isActive }) => isActive ? module.active : ''} to="/music">Music</NavLink></div>
      <div className={module.navSettings}>
        <NavLink className={({ isActive }) => isActive ? module.active : ''} to="/setting">Settings</NavLink>
      </div>
    </nav>
  );
};