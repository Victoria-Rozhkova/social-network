import React, { useEffect } from "react";
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
import { useSearchParams } from "react-router-dom";

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
  filter: FilterType;
};

type OwnPropsType = {
  pages: number;
  onPageChange: (page: number) => void;
};

type PropsType = MapDispatchToPropsType & MapStateToPropsType & OwnPropsType;
type UrlParamsType = { term?: string; friend?: string; page?: string };

const UsersAPI: React.FC<PropsType> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const urlParams: UrlParamsType = Object.fromEntries([...searchParams]);

    let actualPage = props.currentPage;
    let actualFilter = props.filter;

    if (urlParams.page) {
      actualPage = Number(urlParams.page);
    }
    if (urlParams.term) {
      actualFilter = { ...actualFilter, term: urlParams.term };
    }
    // преобразовываем свойство friend из строки в нужное значение
    switch (urlParams.friend) {
      case "null":
        actualFilter = { ...actualFilter, friend: null };
        break;
      case "true":
        actualFilter = { ...actualFilter, friend: true };
        break;
      case "false":
        actualFilter = { ...actualFilter, friend: false };
        break;
    }
    props.getUsers(actualPage, props.pages, actualFilter);
  }, []);

  useEffect(() => {
    const params: UrlParamsType = {};
    if (props.filter.term !== "") params.term = props.filter.term;
    if (props.filter.friend !== null) {
      params.friend = props.filter.friend.toString();
    }
    if (props.currentPage !== 1) params.page = props.currentPage.toString();
    // в url будут отображаться только те параметры, которые не по умолчанию
    const queryString =
      "?" +
      Object.keys(params)
        .map((key) => key + "=" + params[key as keyof UrlParamsType])
        .join("&");
    // в url будут отображаться все параметры поиска
    const query = `?term=${props.filter.term}&friend=${props.filter.friend}&page=${props.currentPage}`;
    setSearchParams(queryString);
  }, [props.filter, props.currentPage]);

  const onPageChange = (page: number) => {
    props.getUsers(page, props.pages, props.filter);
  };
  const onFilterChanged = (filter: FilterType) => {
    const { pages } = props;
    props.getUsers(1, pages, filter);
  };
  return (
    <>
      {props.isLoading ? (
        <Preloader />
      ) : (
        <Users
          totalPageCount={props.totalPageCount}
          pageSize={props.pageSize}
          users={props.users}
          follow={props.follow}
          unfollow={props.unfollow}
          currentPage={props.currentPage}
          onPageChange={onPageChange}
          followingInProgress={props.followingInProgress}
          portionSize={props.portionSize}
          isAuth={props.isAuth}
          onFilterChanged={onFilterChanged}
          filter={props.filter}
        />
      )}
    </>
  );
};

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
