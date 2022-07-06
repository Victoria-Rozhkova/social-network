import React from 'react';
import { Field, reduxForm } from 'redux-form';
import module from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = (props) => {

  const postElements = props.posts.map((post) => {
    return <Post key={post.id} likesCount={post.likesCount} post={post.post} />;
  });
  const addPost = (formData) => {
    props.addPost(formData.post);
    formData.post = "";
  };


  return (
    <div>
      <h3>My posts</h3>
      <div className={module.newPost}>
        <MyPostsReduxForm onSubmit={addPost} />
      </div>
      <div>{postElements}</div>
    </div>
  );
};

const MyPostsForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <Field component="textarea" name='post' autoFocus />
    <button className={module.button}>New post</button>
  </form>;
};
const MyPostsReduxForm = reduxForm({
  form: 'profileAddNewPostForm',
})(MyPostsForm);