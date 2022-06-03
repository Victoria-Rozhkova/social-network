import React, { useRef } from 'react';
import module from './MyPosts.module.css';
import { Post } from './Post/Post';


export const MyPosts = (props) => {
  const postElements = props.posts.map((post) => {
    return <Post likesCount={post.likesCount} post={post.post} />;
  });

  const ref = useRef();
  // const addPost = () => {
  //   props.addPost();
  // };

  const onChangePost = () => {
    const text = ref.current.value;
    props.updateTextPost(text);
  };

  const moveCaretAtEnd = (e) => {
    const temp_value = e.target.value;
    e.target.value = '';
    e.target.value = temp_value;
  };

  return (
    <div>
      <h3>My posts</h3>
      <div className={module.newPost}>
        <textarea onFocus={moveCaretAtEnd} autoFocus ref={ref} value={props.newPostText} onChange={onChangePost} />
        <button onClick={props.addPost} className={module.button}>New post</button>
      </div>
      <div>{postElements}</div>
    </div>
  );
};