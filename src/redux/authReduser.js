import { stopSubmit } from "redux-form";
import { UsersAxios } from "../api/api";
import { toggleIsLoading } from "./usersReduser";

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
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUser = (userId, login, email, isAuth) => {
  return { type: SET_AUTH_USER, payload: { userId, login, email, isAuth } };
};

export const getAuthUser = () => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  const data = await UsersAxios.getAuthUser();
  const { id, login, email } = data.data;
  if (data.resultCode === 0) {
    dispatch(setAuthUser(id, login, email, true));
  }
  dispatch(toggleIsLoading(false));
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await UsersAxios.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getAuthUser());
  } else {
    const error = data.messages[0] ?? "Invalid email or password";
    dispatch(stopSubmit("login", { _error: error }));
  }
};

export const logout = () => async (dispatch) => {
  const data = await UsersAxios.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUser(null, null, null, false));
  }
};

export default authReduser;
