import React from 'react';
import module from './MyPosts.module.css';
import { Post } from './Post/Post';


export const MyPosts = (props) => {
  const postElements = props.posts.map((post) => {
    return <Post post={post.post} />;
  });
  return (
    <div>
      <div>
        <h3>My posts</h3>
      </div>
      <textarea />
      <button>New post</button>
      {postElements}
    </div>
  );
};