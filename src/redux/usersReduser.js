import { UsersAxios } from "../api/api";

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
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
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

export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowing(true, id));
    UsersAxios.followUser(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccses(id));
      }
    });
    dispatch(toggleFollowing(false, id));
  };
};
export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowing(true, id));
    UsersAxios.unfollowUser(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccses(id));
      }
    });
    dispatch(toggleFollowing(false, id));
  };
};

export const getUsers = (currentPage, pages) => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true));
    UsersAxios.getUsers(currentPage, pages).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(100));
      dispatch(toggleIsLoading(false));
    });
  };
};

export const getCurrentPage = (page, pages) => {
  return (dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(toggleIsLoading(true));
    UsersAxios.getUsers(page, pages).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(toggleIsLoading(false));
    });
  };
};

export default usersReduser;
