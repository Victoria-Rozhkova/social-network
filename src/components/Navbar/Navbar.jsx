import React from 'react';
import { NavLink } from 'react-router-dom';
import module from './Navbar.module.css';

export const Navbar = (props) => {
  return (
    <nav className={module.nav}>
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
      <div className={module.friendsBlock}>
        <h2>Friends</h2>
        <div className={module.friends}>
          {props.dialogsPage.dialogs.map((el) => {
            return (
              <div key={el.id} className={module.friend}>
                <img src={el.img} alt="img" />
                {el.name}
              </div>);
          })}
        </div>
      </div>
    </nav>
  );
};