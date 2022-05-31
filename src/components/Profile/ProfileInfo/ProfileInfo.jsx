import React from 'react';
import module from './ProfileInfo.module.css';
import img from '../img/profileImg.png';
import avatar from '../img/avatar.png';

export const ProfileInfo = () => {
  return (
    <div>
      <div className={module.profileImage}>
        <img src={img} alt="img" />
      </div>
      <div className={module.profileInfo}>
        <img src={avatar} alt="avatar" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae quam incidunt voluptate ullam laudantium, voluptatum quaerat ex non asperiores tempore maiores ab suscipit dicta, minus quibusdam soluta reiciendis dolorum?</p>
      </div>
    </div>
  );
};