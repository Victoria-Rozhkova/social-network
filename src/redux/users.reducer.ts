import { Dispatch } from "redux";

import { APIResponseType, ResultCodesEnum } from "@/api/api";
import { InferActionsTypes, ThunkType } from "@/redux/store-redux";
import { UserType } from "@/types/types";
import { UsersAPI } from "@/api/users-api";
import { usersToggleFollow } from "@/utils/helpers/usersHelper";

const FOLLOW = "USERS/FOLLOW";
const UNFOLLOW = "USERS/UNFOLLOW";
const SET_USERS = "USERS/SET_USERS";
const SET_TOTAL_USERS_PAGE = "USERS/SET_TOTAL_USERS_PAGE";
const SET_CURRENT_PAGE = "USERS/SET_CURRENT_PAGE";
export const TOGGLE_LOADING = "USERS/TOGGLE_LOADING";
const TOGGLE_FOLLOWING = "USERS/TOGGLE_FOLLOWING";
const SET_FILTER = "USERS/SET_FILTER";

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalPageCount: 0,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [] as Array<number>,
  portionSize: 10,
  filter: { term: "", friend: null as null | boolean },
};

export type InitialStateType = typeof initialState;
export type FilterType = typeof initialState.filter;
export type UsersActionsType = {
  type: typeof TOGGLE_LOADING;
  isLoading: boolean;
};
type ActionsTypes = InferActionsTypes<typeof usersActions>;

const usersReducer = (
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
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const usersActions = {
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
  setFilter: (filter: FilterType) => {
    return { type: SET_FILTER, payload: filter } as const;
  },
};

type DispatchType = Dispatch<ActionsTypes>;

const _toggleFollowUnfollow = async (
  dispatch: DispatchType,
  id: number,
  api: (userId: number) => Promise<APIResponseType>,
  action: (userId: number) => ActionsTypes
) => {
  dispatch(usersActions.toggleFollowing(true, id));
  const data = await api(id);
  if (data.resultCode === ResultCodesEnum.Succses) {
    dispatch(action(id));
  }
  dispatch(usersActions.toggleFollowing(false, id));
};

export const follow =
  (id: number): ThunkType<ActionsTypes> =>
  (dispatch) => {
    return _toggleFollowUnfollow(
      dispatch,
      id,
      UsersAPI.followUser,
      usersActions.followSuccses
    );
  };

export const unfollow =
  (id: number): ThunkType<ActionsTypes> =>
  (dispatch) => {
    return _toggleFollowUnfollow(
      dispatch,
      id,
      UsersAPI.unfollowUser,
      usersActions.unfollowSuccses
    );
  };

export const getUsers =
  (
    currentPage: number,
    pages: number,
    filter: FilterType
  ): ThunkType<ActionsTypes> =>
  async (dispatch) => {
    dispatch(usersActions.toggleIsLoading(true)); // loader on
    dispatch(usersActions.setFilter(filter));
    dispatch(usersActions.setCurrentPage(currentPage));

    const data = await UsersAPI.getUsers(
      currentPage,
      pages,
      filter.term,
      filter.friend
    );
    dispatch(usersActions.setUsers(data.items));
    dispatch(usersActions.setTotalUsersCount(data.totalCount));
    dispatch(usersActions.toggleIsLoading(false)); // loader off
  };

export default usersReducer;
