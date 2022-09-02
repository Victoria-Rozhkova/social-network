import { connect } from 'react-redux';
import { actionsProfile } from '../../../redux/profileReduser.ts';
import { MyPosts } from './MyPosts';

const MapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    likesCount: state.profilePage.likesCount,
  };
};

const MyPostsContainer = connect(MapStateToProps, {
  addPost: actionsProfile.addPost
})(MyPosts);
export default MyPostsContainer; 