import React from 'react';
import module from './MyPosts.module.css';
import { Post } from './Post/Post';

const posts = [
  { id: 1, post: 'Hey from props' },
  { id: 2, post: 'Hello from map' },
];

const postElements = posts.map((post) => {
  return <Post post={post.post} />;
});

export const MyPosts = () => {
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