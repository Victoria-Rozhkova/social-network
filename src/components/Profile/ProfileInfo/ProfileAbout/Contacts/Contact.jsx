import React from 'react';
import module from '../ProfileAbout.module.css';

export const Contact = ({ profile, value }) => {
  return <li> {value}: {profile.contacts[value] === null || ""
    ? <span className={module.noContacts}>не указано</span>
    : <a href={profile.contacts[value]}>{profile.contacts[value]}</a>}  </li>;
}; 