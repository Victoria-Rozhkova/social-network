import React from "react";
import { connect } from "react-redux";
import {
  FilterType,
  follow,
  getUsers,
  unfollow,
} from "../../redux/usersReduser";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import {
  currentPageSelector,
  filterSelector,
  followingInProgressSelector,
  isLoadingSelector,
  pagesSelector,
  portionSizeSelector,
  totalPageCountSelector,
  usersSelector,
} from "../../redux/selectors/usersSelectors";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/store-redux";
import { isAuthSelector } from "src/redux/selectors/authSelectors";

type MapDispatchToPropsType = {
  getUsers: (currentPage: number, pages: number, filter: FilterType) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

type MapStateToPropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalPageCount: number;
  currentPage: number;
  isLoading: boolean;
  followingInProgress: Array<number>;
  portionSize: number;
  isAuth: boolean;
  filter: FilterType,
};

type OwnPropsType = {
  pages: number;
  onPageChange: (page: number) => void;
};

type PropsType = MapDispatchToPropsType & MapStateToPropsType & OwnPropsType;

class UsersAPI extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pages, this.props.filter);
  }
  onPageChange = (page: number) => {
    this.props.getUsers(page, this.props.pages, this.props.filter);
  };
  onFilterChanged = (filter: FilterType) => {
    const { pages } = this.props;
    this.props.getUsers(1, pages, filter);
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
            isAuth={this.props.isAuth}
            onFilterChanged={this.onFilterChanged}
            filter={this.props.filter}
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
    isAuth: isAuthSelector(state),
    filter: filterSelector(state),
  };
};

const UsersContainer = compose<React.ComponentType>(
  connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    OwnPropsType,
    AppStateType
  >(MapStateToProps, {
    follow,
    unfollow,
    getUsers,
  })
)(UsersAPI);

export default UsersContainer;
