const SET_AUTH_USER = "SET_AUTH_USER";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isLoading: false,
  isAuth: false,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUser = (userId, login, email) => {
  return { type: SET_AUTH_USER, data: { userId, login, email } };
};
export default authReduser;
