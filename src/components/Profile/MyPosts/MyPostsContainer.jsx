import { connect } from 'react-redux';
import { addPostActionCreator, updateTextPostActionCreator } from '../../../redux/profileReduser';
import { MyPosts } from './MyPosts';

const MapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    likesCount: state.profilePage.likesCount,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    addPost: () => { dispatch(addPostActionCreator()); },
    updateTextPost: (text) => { dispatch(updateTextPostActionCreator(text)); }
  };
};

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);
export default MyPostsContainer; 