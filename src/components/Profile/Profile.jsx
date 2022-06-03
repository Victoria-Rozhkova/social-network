import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import module from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = (props) => {
  return (
    <div className={module.content}>
      <ProfileInfo />
      <MyPosts addPost={props.addPost}
        updateTextPost={props.updateTextPost}
        newPostText={props.profilePage.newPostText}
        posts={props.profilePage.posts}
        likesCount={props.profilePage.likesCount} />
    </div>
  );
};