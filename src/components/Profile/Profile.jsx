import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import module from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  // if (props.isAuth) {
  return (
    <div className={module.content}>
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto} />
      <MyPostsContainer />
    </div>
  );
};
 // else {
//    <Navigate to="/login" />;
 // }
//};
