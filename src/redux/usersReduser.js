import { UsersAxios } from "../api/api";
import { usersToggleFollow } from "../utils/helpers/usersHelper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_PAGE = "SET_TOTAL_USERS_PAGE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_LOADING = "TOGGLE_LOADING";
const TOGGLE_FOLLOWING = "TOGGLE_FOLLOWING";

let initialState = {
  users: [],
  pages: 10,
  totalPageCount: 0,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [],
};

const usersReduser = (state = initialState, action) => {
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
          followingInProgress: [
            state.followingInProgress.filter((id) => id !== action.userId),
          ],
        };
      }
      return state;
    default:
      return state;
  }
};

export const followSuccses = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollowSuccses = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};
export const setTotalUsersCount = (pagesCount) => {
  return { type: SET_TOTAL_USERS_PAGE, pagesCount };
};
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export const toggleIsLoading = (isLoading) => {
  return { type: TOGGLE_LOADING, isLoading };
};
export const toggleFollowing = (isProgress, userId) => {
  return { type: TOGGLE_FOLLOWING, isProgress, userId };
};

const toggleFollowUnfollow = async (dispatch, id, api, action) => {
  dispatch(toggleFollowing(true, id));
  const data = await api(id);
  if (data.resultCode === 0) {
    dispatch(action(id));
  }
  dispatch(toggleFollowing(false, id));
};

export const follow = (id) => (dispatch) => {
  toggleFollowUnfollow(dispatch, id, UsersAxios.followUser, followSuccses);
};

export const unfollow = (id) => (dispatch) => {
  toggleFollowUnfollow(dispatch, id, UsersAxios.unfollowUser, unfollowSuccses);
};

export const getUsers = (currentPage, pages) => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  const data = await UsersAxios.getUsers(currentPage, pages);
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(100));
  dispatch(toggleIsLoading(false));
};

export const getCurrentPage = (page, pages) => async (dispatch) => {
  dispatch(setCurrentPage(page));
  dispatch(toggleIsLoading(true));
  const data = await UsersAxios.getUsers(page, pages);
  dispatch(setUsers(data.items));
  dispatch(toggleIsLoading(false));
};

export default usersReduser;
