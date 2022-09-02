import { connect } from 'react-redux';
import { postsSelector } from 'src/redux/selectors/profileSelectors';
import { actionsProfile } from '../../../redux/profileReduser.ts';
import { MyPosts } from './MyPosts';

const MapStateToProps = (state) => {
  return {
    posts: postsSelector(state),
  };
};

const MyPostsContainer = connect(MapStateToProps, {
  addPost: actionsProfile.addPost
})(MyPosts);
export default MyPostsContainer; 