import React from 'react';
import module from '../ProfileAbout.module.css';

export const Contact = ({ contactTitle, contactValue }) => {
  return <li> {contactTitle}: {contactValue === null || contactValue === ""
    ? <span className={module.noContacts}>not stated</span>
    : <a href={contactValue}>{contactValue}</a>}  </li>;
}; 