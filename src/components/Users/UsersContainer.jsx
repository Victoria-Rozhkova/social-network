import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, toggleIsLoadingActionCreator, unfollowActionCreator } from '../../redux/usersReduser';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    axios.get(`http://localhost:3004/users?_page=${this.props.currentPage}&_limit=${this.props.pages}`)
      .then(response => {
        this.props.setUsers(response.data);
      });
    axios.get(" http://localhost:3004/totalCount")
      .then(response => {
        this.props.setTotalUsersCount(response.data);
        this.props.toggleIsLoading(false);
      });
  }
  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsLoading(true);
    axios.get(`http://localhost:3004/users?_page=${page}&_limit=${this.props.pages}`)
      .then(response => {
        this.props.setUsers(response.data);
        this.props.toggleIsLoading(false);
      });
  };
  render() {
    return <>
      {this.props.isLoading
        ? <Preloader />
        : <Users
          totalPageCount={this.props.totalPageCount}
          pages={this.props.pages}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange} />}
    </>;
  }
}

const MapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pages: state.usersPage.pages,
    totalPageCount: state.usersPage.totalPageCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => { dispatch(followActionCreator(userId)); },
    unfollow: (userId) => { dispatch(unfollowActionCreator(userId)); },
    setUsers: (users) => { dispatch(setUsersActionCreator(users)); },
    setCurrentPage: (currentPage) => { dispatch(setCurrentPageActionCreator(currentPage)); },
    setTotalUsersCount: (pagesCount) => { dispatch(setTotalUsersCountActionCreator(pagesCount)); },
    toggleIsLoading: (isLoading) => { dispatch(toggleIsLoadingActionCreator(isLoading)); }
  };
};

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(UsersAPI);
export default UsersContainer;