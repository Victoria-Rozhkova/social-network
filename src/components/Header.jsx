import React from 'react';
import module from './Header.module.css';

export const Header = () => {
  return (
    <header className={module.header}>
      <img className='logo' src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg" alt="logo" />
    </header>
  );
};