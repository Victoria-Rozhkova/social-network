import React from 'react';
import { Navigate } from '../Navbar/Navigate/Navigate';
// import { Preloader } from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import module from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = (props) => {
  if (props.isAuth) {
    return (
      <div className={module.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        <MyPostsContainer />
      </div>
    );
  }
  else {
    <Navigate to="/login" />;
  }
};
