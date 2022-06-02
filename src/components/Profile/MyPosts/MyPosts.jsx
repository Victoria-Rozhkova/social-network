import React, { useRef } from 'react';
import module from './MyPosts.module.css';
import { Post } from './Post/Post';


export const MyPosts = (props) => {
  const postElements = props.posts.map((post) => {
    return <Post likesCount={post.likesCount} post={post.post} />;
  });

  const ref = useRef();
  const addPost = () => {
    const text = ref.current.value;
    props.addPost(text);
    ref.current.value = '';
  };

  return (
    <div>
      <h3>My posts</h3>
      <div className={module.newPost}>
        <textarea ref={ref} />
        <button onClick={addPost} className={module.button}>New post</button>
      </div>
      <div>{postElements}</div>
    </div>
  );
};