import React from "react";
import { connect } from "react-redux";
import {
  follow,
  getCurrentPage,
  getUsers,
  unfollow,
} from "../../redux/usersReduser.ts";
import { Users } from "./Users.tsx";
import { Preloader } from "../common/Preloader/Preloader";
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import {
  currentPageSelector,
  followingInProgressSelector,
  isLoadingSelector,
  pagesSelector,
  portionSizeSelector,
  totalPageCountSelector,
  usersSelector,
} from "../../redux/selectors/userSelectors.ts";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/store-redux";

type MapDispatchToPropsType = {
  getUsers: (currentPage: number, pages: number) => void;
  getCurrentPage: (page: number, pages: number) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

type MapStateToPropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalPageCount: number;
  currentPage: number;
  isLoading: boolean;
  followingInProgress: boolean;
  portionSize: number;
};

type OwnPropsType = {
  pages: number;
  onPageChange: () => void;
};

type PropsType = MapDispatchToPropsType & MapStateToPropsType & OwnPropsType;

class UsersAPI extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pages);
  }
  onPageChange = (page: number) => {
    this.props.getCurrentPage(page, this.props.pages);
  };
  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <Users
            totalPageCount={this.props.totalPageCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            followingInProgress={this.props.followingInProgress}
            portionSize={this.props.portionSize}
          />
        )}
      </>
    );
  }
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: usersSelector(state),
    pageSize: pagesSelector(state),
    totalPageCount: totalPageCountSelector(state),
    currentPage: currentPageSelector(state),
    isLoading: isLoadingSelector(state),
    followingInProgress: followingInProgressSelector(state),
    portionSize: portionSizeSelector(state),
  };
};

const UsersContainer = compose(
  connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    OwnPropsType,
    AppStateType
  >(MapStateToProps, {
    follow,
    unfollow,
    getUsers,
    getCurrentPage,
  })
)(UsersAPI);

export default UsersContainer;
