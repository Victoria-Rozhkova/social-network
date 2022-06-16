const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_PAGE = "SET_TOTAL_USERS_PAGE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_LOADING = "TOGGLE_LOADING";

let initialState = {
  users: [],
  pages: 5,
  totalPageCount: 0,
  currentPage: 1,
  isLoading: false,
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
    default:
      return state;
  }
};

export const follow = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollow = (userId) => {
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

export default usersReduser;
