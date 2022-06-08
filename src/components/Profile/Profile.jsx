import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import module from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = (props) => {
  return (
    <div className={module.content}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};