import React from 'react';
import module from '../ProfileAbout.module.css';
import { Contact } from './Contact';

export const Contacts = ({ profile }) => {

  return <div className={module.contactsWrapper}>
    <p className={module.title}><b>Contacts: </b> </p>
    <ul className={module.contacts}>
      {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} value={key} profile={profile} />;
      }
      )}</ul>

  </div>;
};