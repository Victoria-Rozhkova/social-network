import { addPostActionCreator, updateTextPostActionCreator } from '../../../redux/profileReduser';
import { MyPosts } from './MyPosts';

export const MyPostsContainer = (props) => {
  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onChangePost = (text) => {
    props.store.dispatch(updateTextPostActionCreator(text));
  };

  return (
    <MyPosts addPost={addPost} updateTextPost={onChangePost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
      likesCount={state.profilePage.likesCount} />
  );
};