import React from 'react';
import module from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
  return (
    <div>
      <div>
        my posts
      </div>
      <textarea />
      <button>New post</button>
      <Post message='Hey from props' />
    </div>

  );
};