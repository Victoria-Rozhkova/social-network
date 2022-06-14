import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReduser';
import { Users } from './Users';

class UsersAPI extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:3004/users?_page=${this.props.currentPage}&_limit=${this.props.pages}`)
      .then(response => {
        this.props.setUsers(response.data);
      });
    axios.get(" http://localhost:3004/totalCount")
      .then(response => {
        this.props.setTotalUsersCount(response.data);
      });
  }
  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    axios.get(`http://localhost:3004/users?_page=${page}&_limit=${this.props.pages}`)
      .then(response => {
        this.props.setUsers(response.data);
      });
  };
  render() {
    return <Users totalPageCount={this.props.totalPageCount}
      pages={this.props.pages}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      currentPage={this.props.currentPage}
      onPageChange={this.onPageChange}

    />;
  }
}

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

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(UsersAPI);
export default UsersContainer;