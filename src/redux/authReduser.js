import { stopSubmit } from "redux-form";
import { SecurityAxios, UsersAxios } from "../api/api";
import { toggleIsLoading } from "./usersReduser";

const SET_AUTH_USER = "auth/SET_AUTH_USER";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isLoading: false,
  isAuth: false,
  captchaUrl: null,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.url,
      };
    default:
      return state;
  }
};

export const setAuthUser = (userId, login, email, isAuth) => {
  return { type: SET_AUTH_USER, payload: { userId, login, email, isAuth } };
};
export const setCaptchaUrl = (url) => {
  return { type: SET_CAPTCHA_URL, url };
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

export const login =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    const data = await UsersAxios.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
      dispatch(getAuthUser());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptcha());
      }
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

export const getCaptcha = () => async (dispatch) => {
  const data = await SecurityAxios.getCaptchaUrl();
  const url = data.url;
  dispatch(setCaptchaUrl(url));
};

export default authReduser;
