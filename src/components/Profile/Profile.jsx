import React from 'react';
// import { Preloader } from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import module from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = (props) => {
  return (
    <div className={module.content}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  );
};