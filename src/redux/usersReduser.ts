import { AppStateType, InferActionsTypes } from "./store-redux";
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

type ActionsTypes = InferActionsTypes<typeof actions>;

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

export const actions = {
  followSuccses: (userId: number) => {
    return { type: FOLLOW, userId } as const;
  },
  unfollowSuccses: (userId: number) => {
    return { type: UNFOLLOW, userId } as const;
  },
  setUsers: (users: Array<UserType>) => {
    return { type: SET_USERS, users } as const;
  },
  setTotalUsersCount: (pagesCount: number) => {
    return { type: SET_TOTAL_USERS_PAGE, pagesCount } as const;
  },
  setCurrentPage: (currentPage: number) => {
    return { type: SET_CURRENT_PAGE, currentPage } as const;
  },
  toggleIsLoading: (isLoading: boolean) => {
    return { type: TOGGLE_LOADING, isLoading } as const;
  },
  toggleFollowing: (isProgress: boolean, userId: number) => {
    return { type: TOGGLE_FOLLOWING, isProgress, userId } as const;
  },
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
  action: (userId: number) => ActionsTypes
) => {
  dispatch(actions.toggleFollowing(true, id));
  const data = await api(id);
  if (data.resultCode === 0) {
    dispatch(action(id));
  }
  dispatch(actions.toggleFollowing(false, id));
};

export const follow =
  (id: number): ThunkType =>
  (dispatch) => {
    return _toggleFollowUnfollow(
      dispatch,
      id,
      UsersAxios.followUser,
      actions.followSuccses
    );
  };

export const unfollow =
  (id: number): ThunkType =>
  (dispatch) => {
    return _toggleFollowUnfollow(
      dispatch,
      id,
      UsersAxios.unfollowUser,
      actions.unfollowSuccses
    );
  };

export const getUsers =
  (currentPage: number, pages: number): ThunkType =>
  async (dispatch, getState) => {
    dispatch(actions.toggleIsLoading(true));
    const data = await UsersAxios.getUsers(currentPage, pages);
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
    dispatch(actions.toggleIsLoading(false));
  };

export const getCurrentPage =
  (page: number, pages: number): ThunkType =>
  async (dispatch) => {
    dispatch(actions.setCurrentPage(page));
    dispatch(actions.toggleIsLoading(true));
    const data = await UsersAxios.getUsers(page, pages);
    dispatch(actions.setUsers(data.items));
    dispatch(actions.toggleIsLoading(false));
  };

export default usersReduser;
