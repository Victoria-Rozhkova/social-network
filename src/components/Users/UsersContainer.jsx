import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReduser';
import Users from './Users';


const MapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => { dispatch(followActionCreator(userId)); },
    unfollow: (userId) => { dispatch(unfollowActionCreator(userId)); },
    setUsers: (users) => { dispatch(setUsersActionCreator(users)); }
  };
};

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);
export default UsersContainer;