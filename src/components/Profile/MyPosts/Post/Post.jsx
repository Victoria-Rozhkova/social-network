import React from 'react';
import module from './Post.module.css';
import img from './post.png';

export const Post = (props) => {
  return (
    <div className={module.posts}>
      <div className={module.post}><img className={module.postAvatar} src={img} alt="avatar" />
        {props.post}</div>
    </div>
  );
};