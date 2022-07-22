import React from 'react';
import module from '../ProfileAbout.module.css';

export const AboutMe = ({ profile }) => {

  return (
    <div className={module.aboutMe}>
      <p className={module.text}><b>Looking for a job: </b>
        {profile.lookingForAJob ? "yes" : 'no'}
      </p>
      {profile.lookingForAJob && <p className={module.text}><b>Looking for a job description: </b>
        {profile.lookingForAJobDescription}
      </p>}
      <p className={module.text}><b>About me:</b>{profile.aboutMe}</p>
    </div>);
};