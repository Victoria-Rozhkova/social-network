import React, { useRef } from 'react';
import module from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = (props) => {

  const ref = useRef();

  const addPost = () => {
    props.addPost();
  };

  const onChangePost = () => {
    const text = ref.current.value;
    props.updateTextPost(text);
  };

  //Фокус в конец textarea
  const moveCaretAtEnd = (e) => {
    const temp_value = e.target.value;
    e.target.value = '';
    e.target.value = temp_value;
  };

  const postElements = props.posts.map((post) => {
    return <Post key={post.id} likesCount={post.likesCount} post={post.post} />;
  });

  return (
    <div>
      <h3>My posts</h3>
      <div className={module.newPost}>
        <textarea onFocus={moveCaretAtEnd} autoFocus ref={ref} value={props.newPostText}
          onChange={onChangePost} />
        <button onClick={addPost} className={module.button}>New post</button>
      </div>
      <div>{postElements}</div>
    </div>
  );
};