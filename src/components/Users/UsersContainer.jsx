import { connect } from 'react-redux';
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReduser';
import Users from './Users';


const MapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pages: state.usersPage.pages,
    totalPageCount: state.usersPage.totalPageCount,
    currentPage: state.usersPage.currentPage,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => { dispatch(followActionCreator(userId)); },
    unfollow: (userId) => { dispatch(unfollowActionCreator(userId)); },
    setUsers: (users) => { dispatch(setUsersActionCreator(users)); },
    setCurrentPage: (currentPage) => { dispatch(setCurrentPageActionCreator(currentPage)); },
    setTotalUsersCount: (pagesCount) => { dispatch(setTotalUsersCountActionCreator(pagesCount)); }
  };
};

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);
export default UsersContainer;