import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowing, toggleIsLoading, unfollow } from '../../redux/usersReduser';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';
import { UsersAxios } from '../../api/api';

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    UsersAxios.getUsers(this.props.currentPage, this.props.pages)
      .then(data => {
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(50);
        this.props.toggleIsLoading(false);
      });
  }
  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsLoading(true);
    UsersAxios.getUsers(page, this.props.pages)
      .then(data => {
        this.props.setUsers(data.items);
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
          onPageChange={this.onPageChange}
          toggleFollowing={this.props.toggleFollowing}
          followingInProgress={this.props.followingInProgress}
        />}
    </>;
  }
}

const MapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pages: state.usersPage.pages,
    totalPageCount: state.usersPage.totalPageCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress,
  };
};


const UsersContainer = connect(MapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsLoading,
  toggleFollowing
})(UsersAPI);
export default UsersContainer;