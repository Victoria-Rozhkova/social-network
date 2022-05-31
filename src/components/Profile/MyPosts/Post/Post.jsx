import React from 'react';
import module from './Post.module.css';

export const Post = (props) => {
  return (
    <div>

      <div> <img src="http://placeimg.com/50/50/animals" alt="avatar" />
        {props.message}</div>
    </div>
  );
};