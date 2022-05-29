import React from 'react';
import module from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={module.nav}>
      <div className={module.navbar}>
        <a className={module.navbar_link} href="#a">Profile</a>
        <a className={module.navbar_link} href="#d">Messages</a>
        <a className={module.navbar_link} href="#f">News</a>
        <a className={module.navbar_link} href="#g">Music</a>
      </div>
      <div className={module.navSettings}>
        <a className={module.navbar_link} href="#s">Settings</a>
      </div>
    </nav>
  );
};