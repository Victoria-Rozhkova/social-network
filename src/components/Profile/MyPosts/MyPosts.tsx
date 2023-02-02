import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { Post } from "@/components/Profile/MyPosts/Post/Post";
import { actionsProfile } from "@/redux/profileReduser";
import { postsSelector } from "@/redux/selectors/profileSelectors";
import module from "@/components/Profile/MyPosts/MyPosts.module.css";

export const MyPosts: FC = () => {
  const posts = useSelector(postsSelector);

  const dispatch = useDispatch();

  const postElements = posts.map((post) => {
    return <Post key={post.id} likesCount={post.likesCount} post={post.post} />;
  });
  const addPost = (formData: { post: string }) => {
    dispatch(actionsProfile.addPost(formData.post));
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
const MyPostsReduxForm: any = reduxForm({
  form: "profileAddNewPostForm",
})(MyPostsForm);
