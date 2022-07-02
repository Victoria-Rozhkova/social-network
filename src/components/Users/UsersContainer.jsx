import React from 'react';
import { connect } from 'react-redux';
import { follow, getCurrentPage, getUsers, unfollow } from '../../redux/usersReduser';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pages);
  }
  onPageChange = (page) => {
    this.props.getCurrentPage(page, this.props.pages);
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

const UsersContainer = compose(connect(MapStateToProps, {
  follow,
  unfollow,
  getUsers,
  getCurrentPage
}), withAuthRedirect)(UsersAPI);

export default UsersContainer;