import React from 'react';
import module from './ProfileInfo.module.css';
import img from '../img/profileImg.png';
import userPhoto from '../../../assets/images/user.png';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';

export const ProfileInfo = (props) => {
  if (props.profile === null) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={module.profileImage}>
        <img src={img} alt="img" />
      </div>
      <div className={module.profileInfo}>
        <img src={props.profile.photos.large == null
          ? userPhoto
          : props.profile.photos.large} alt="avatar" />
        <div className={module.description}>
          <h2 className={module.heading}>{props.profile.fullName}</h2>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
          <p className={module.text}>{props.profile.aboutMe}</p></div>
      </div>
    </div>
  );
};