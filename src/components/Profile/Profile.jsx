import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import module from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = (props) => {
  return (
    <div className={module.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  );
};