import React from 'react';
import module from './ProfileInfo.module.css';
import img from '../img/profileImg.png';
import userPhoto from '../../../assets/images/user.png';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';

export const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (profile === null) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={module.profileImage}>
        <img src={img} alt="img" />
      </div>
      <div className={module.profileInfo}>
        <img src={profile.photos.large == null
          ? userPhoto
          : profile.photos.large} alt="avatar" />
        <div className={module.description}>
          <h2 className={module.heading}>{profile.fullName}</h2>
          <ProfileStatus status={status} updateStatus={updateStatus} />
          <p className={module.text}>{profile.aboutMe}</p></div>
      </div>
    </div>
  );
};