import React from 'react';
import { connect } from 'react-redux';
import { follow, getCurrentPage, getUsers, unfollow } from '../../redux/usersReduser';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { currentPageSelector, followingInProgressSelector, isLoadingSelector, pagesSelector, portionSizeSelector, totalPageCountSelector, usersSelector } from '../../redux/selectors/userSelectors';

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
          pageSize={this.props.pageSize}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          followingInProgress={this.props.followingInProgress}
          portionSize={this.props.portionSize}
        />}
    </>;
  }
}

const MapStateToProps = (state) => {
  return {
    users: usersSelector(state),
    pageSize: pagesSelector(state),
    totalPageCount: totalPageCountSelector(state),
    currentPage: currentPageSelector(state),
    isLoading: isLoadingSelector(state),
    followingInProgress: followingInProgressSelector(state),
    portionSize: portionSizeSelector(state)
  };
};

const UsersContainer = compose(connect(MapStateToProps, {
  follow,
  unfollow,
  getUsers,
  getCurrentPage
}))(UsersAPI);

export default UsersContainer;