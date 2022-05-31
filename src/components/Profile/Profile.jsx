import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import module from './Profile.module.css';
import img from './img/profileImg.png';
import avatar from './img/avatar.png';

export const Profile = () => {
  return (
    <div className={module.content}>
      <div className={module.profileImage}>
        <img src={img} alt="img" />
      </div>
      <div>
        <img src={avatar} alt="avatar" />
        <p>descr</p>
      </div>
      <MyPosts />
    </div>
  );
};