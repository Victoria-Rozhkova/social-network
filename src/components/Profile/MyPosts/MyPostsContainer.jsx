import { connect } from 'react-redux';
import { addPost } from '../../../redux/profileReduser';
import { MyPosts } from './MyPosts';

const MapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    likesCount: state.profilePage.likesCount,
  };
};

const MyPostsContainer = connect(MapStateToProps, {
  addPost
})(MyPosts);
export default MyPostsContainer; 