import React from 'react';
import { Friends } from './Friends/Friends';
import module from './Navbar.module.css';
import { Navigate } from './Navigate/Navigate';

export const Navbar = ({ friends }) => {
  return (
    <div className={module.nav}>
      <Navigate />
      <Friends friends={friends} />
    </div>
  );
};