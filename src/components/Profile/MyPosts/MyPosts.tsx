import React, { FC } from "react";
import { Field, reduxForm } from "redux-form";
import { PostType } from "src/types/types";
import module from "./MyPosts.module.css";
import { Post } from "./Post/Post";

type PropsType = {
  posts: Array<PostType>;
  addPost: (post: string) => void;
};

export const MyPosts: FC<PropsType> = (props) => {
  const postElements = props.posts.map((post) => {
    return <Post key={post.id} likesCount={post.likesCount} post={post.post} />;
  });
  const addPost = (formData: { post: string }) => {
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

const MyPostsForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component="textarea" name="post" autoFocus />
      <button className={module.button}>New post</button>
    </form>
  );
};
const MyPostsReduxForm = reduxForm({
  form: "profileAddNewPostForm",
})(MyPostsForm);
