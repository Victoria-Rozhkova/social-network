import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { SecurityAxios, UsersAxios } from "../api/api";
import { AppStateType } from "./store-redux";
import { toggleIsLoading } from "./usersReduser.ts";

const SET_AUTH_USER = "auth/SET_AUTH_USER";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";

const initialState = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isLoading: false,
  isAuth: false,
  captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;
type ActionsTypes = SetAuthUserActionType | setCaptchaUrlActionType;

const authReduser = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
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

type SetAuthUserActionPayloadType = {
  userId: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
};
type SetAuthUserActionType = {
  type: typeof SET_AUTH_USER;
  payload: SetAuthUserActionPayloadType;
};

export const setAuthUser = (
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean
): SetAuthUserActionType => {
  return { type: SET_AUTH_USER, payload: { userId, login, email, isAuth } };
};

type setCaptchaUrlActionType = {
  type: typeof SET_CAPTCHA_URL;
  url: string;
};

export const setCaptchaUrl = (url: string): setCaptchaUrlActionType => {
  return { type: SET_CAPTCHA_URL, url };
};

type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;

export const getAuthUser = (): ThunkType => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  const data = await UsersAxios.getAuthUser();
  const { id, login, email } = data.data;
  if (data.resultCode === 0) {
    dispatch(setAuthUser(id, login, email, true));
  }
  dispatch(toggleIsLoading(false));
};

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: null
  ): ThunkType =>
  async (dispatch) => {
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

export const logout = (): ThunkType => async (dispatch) => {
  const data = await UsersAxios.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUser(null, null, null, false));
  }
};

export const getCaptcha = (): ThunkType => async (dispatch) => {
  const data = await SecurityAxios.getCaptchaUrl();
  const url = data.url;
  dispatch(setCaptchaUrl(url));
};

export default authReduser;
