import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsLoading, unfollow } from '../../redux/usersReduser';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pages}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(50);
        this.props.toggleIsLoading(false);
      });
  }
  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsLoading(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pages}`)
      .then(response => {
        this.props.setUsers(response.data.items);
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


const UsersContainer = connect(MapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsLoading,
})(UsersAPI);
export default UsersContainer;