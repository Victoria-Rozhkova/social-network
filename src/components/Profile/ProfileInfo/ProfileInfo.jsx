import React from 'react';
import module from './ProfileInfo.module.css';
import img from '../img/profileImg.png';
import avatar from '../img/avatar.png';
import { Preloader } from '../../common/Preloader/Preloader';

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
        <img src={props.profile.photos.large} alt="avatar" />
        <div className={module.description}>
          <h2 className={module.heading}>{props.profile.fullName}</h2>
          <p className={module.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae quam incidunt voluptate ullam laudantium, voluptatum quaerat ex non asperiores tempore maiores ab suscipit dicta, minus quibusdam soluta reiciendis dolorum?</p></div>
      </div>
    </div>
  );
};