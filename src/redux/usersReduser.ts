import { AppStateType } from "./store-redux";
import { UserType } from "./../types/types";
import { UsersAxios } from "../api/api";
import { usersToggleFollow } from "../utils/helpers/usersHelper";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_PAGE = "SET_TOTAL_USERS_PAGE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_LOADING = "TOGGLE_LOADING";
const TOGGLE_FOLLOWING = "TOGGLE_FOLLOWING";

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalPageCount: 0,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [] as Array<number>,
  portionSize: 10,
};

type InitialStateType = typeof initialState;

type ActionsTypes =
  | FollowSuccsesActionType
  | UnfollowSuccsesActionType
  | SetUsersActionType
  | SetTotalUsersCountActionType
  | SetCurrentPageActionType
  | ToggleIsLoadingActionType
  | ToggleFollowingActionType;

const usersReduser = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: usersToggleFollow(state.users, "id", action.userId, {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: usersToggleFollow(state.users, "id", action.userId, {
          followed: false,
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_TOTAL_USERS_PAGE:
      return { ...state, totalPageCount: action.pagesCount };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case TOGGLE_LOADING:
      return { ...state, isLoading: action.isLoading };
    case TOGGLE_FOLLOWING:
      if (action.isProgress) {
        return {
          ...state,
          followingInProgress: [...state.followingInProgress, action.userId],
        };
      } else if (!action.isProgress) {
        return {
          ...state,
          followingInProgress: state.followingInProgress.filter(
            (id) => id !== action.userId
          ),
        };
      }
      return state;
    default:
      return state;
  }
};

type FollowSuccsesActionType = {
  type: typeof FOLLOW;
  userId: number;
};
export const followSuccses = (userId: number): FollowSuccsesActionType => {
  return { type: FOLLOW, userId };
};
type UnfollowSuccsesActionType = {
  type: typeof UNFOLLOW;
  userId: number;
};
export const unfollowSuccses = (userId: number): UnfollowSuccsesActionType => {
  return { type: UNFOLLOW, userId };
};
type SetUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};
export const setUsers = (users: Array<UserType>): SetUsersActionType => {
  return { type: SET_USERS, users };
};
type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_PAGE;
  pagesCount: number;
};
export const setTotalUsersCount = (
  pagesCount: number
): SetTotalUsersCountActionType => {
  return { type: SET_TOTAL_USERS_PAGE, pagesCount };
};
type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
export const setCurrentPage = (
  currentPage: number
): SetCurrentPageActionType => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
type ToggleIsLoadingActionType = {
  type: typeof TOGGLE_LOADING;
  isLoading: boolean;
};
export const toggleIsLoading = (
  isLoading: boolean
): ToggleIsLoadingActionType => {
  return { type: TOGGLE_LOADING, isLoading };
};
type ToggleFollowingActionType = {
  type: typeof TOGGLE_FOLLOWING;
  isProgress: boolean;
  userId: number;
};
export const toggleFollowing = (
  isProgress: boolean,
  userId: number
): ToggleFollowingActionType => {
  return { type: TOGGLE_FOLLOWING, isProgress, userId };
};

// type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;

const _toggleFollowUnfollow = async (
  dispatch: DispatchType,
  id: number,
  api: any,
  action: (
    userId: number
  ) => FollowSuccsesActionType | UnfollowSuccsesActionType
) => {
  dispatch(toggleFollowing(true, id));
  const data = await api(id);
  if (data.resultCode === 0) {
    dispatch(action(id));
  }
  dispatch(toggleFollowing(false, id));
};

export const follow =
  (id: number): ThunkType =>
  (dispatch) => {
    return _toggleFollowUnfollow(
      dispatch,
      id,
      UsersAxios.followUser,
      followSuccses
    );
  };

export const unfollow =
  (id: number): ThunkType =>
  (dispatch) => {
    return _toggleFollowUnfollow(
      dispatch,
      id,
      UsersAxios.unfollowUser,
      unfollowSuccses
    );
  };

export const getUsers =
  (currentPage: number, pages: number): ThunkType =>
  async (dispatch, getState) => {
    dispatch(toggleIsLoading(true));
    const data = await UsersAxios.getUsers(currentPage, pages);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsLoading(false));
  };

export const getCurrentPage =
  (page: number, pages: number): ThunkType =>
  async (dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(toggleIsLoading(true));
    const data = await UsersAxios.getUsers(page, pages);
    dispatch(setUsers(data.items));
    dispatch(toggleIsLoading(false));
  };

export default usersReduser;
