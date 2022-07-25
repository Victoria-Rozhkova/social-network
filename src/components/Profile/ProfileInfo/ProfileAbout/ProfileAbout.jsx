import React from 'react';
import module from './ProfileAbout.module.css';
import { AboutMe } from './AboutMe/AboutMe';
import { Contacts } from './Contacts/Contacts';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';

export const ProfileAbout = ({ profile, status, updateStatus, goToEditMode }) => {

  return <div className={module.description}>
    <div> <h2 className={module.heading}>{profile.fullName}</h2>
      <ProfileStatus status={status} updateStatus={updateStatus} />
      <AboutMe profile={profile} />
      <Contacts profile={profile} />
    </div>
    <div><button className={module.editBtn} onClick={goToEditMode}>Edit profile</button></div>
  </div>;
};