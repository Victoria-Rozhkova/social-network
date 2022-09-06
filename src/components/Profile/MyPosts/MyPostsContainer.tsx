import { connect } from "react-redux";
import { postsSelector } from "src/redux/selectors/profileSelectors";
import { AppStateType } from "src/redux/store-redux";
import { actionsProfile } from "../../../redux/profileReduser";
import { MyPosts } from "./MyPosts";

const MapStateToProps = (state: AppStateType) => {
  return {
    posts: postsSelector(state),
  };
};

const MyPostsContainer = connect(MapStateToProps, {
  addPost: actionsProfile.addPost,
})(MyPosts);
export default MyPostsContainer;
