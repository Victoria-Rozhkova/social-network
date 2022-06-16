import { connect } from 'react-redux';
import { addPost, updateTextPost } from '../../../redux/profileReduser';
import { MyPosts } from './MyPosts';

const MapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    likesCount: state.profilePage.likesCount,
  };
};

const MyPostsContainer = connect(MapStateToProps, {
  addPost,
  updateTextPost,})(MyPosts);
export default MyPostsContainer; 