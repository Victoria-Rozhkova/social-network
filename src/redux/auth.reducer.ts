import { AuthAPI } from "@/api/auth-api";
import { SecurityAPI } from "@/api/security-api";
import { ResultCodesEnum } from "@/api/api";
import { InferActionsTypes, ThunkType } from "@/redux/store-redux";
import { usersActions, UsersActionsType } from "@/redux/users.reducer";

const SET_AUTH_USER = "auth/SET_AUTH_USER";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";
const SET_ERROR = "auth/SET_ERROR";

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof authActions>;

const initialState = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isLoading: false,
  isAuth: false,
  captchaUrl: null as string | null,
  error: "",
};

const authReducer = (
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
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
export type SetAuthUserType = {
  type: typeof SET_AUTH_USER;
  payload: {
    userId: number | null;
    login: string | null;
    email: string | null;
    isAuth: boolean;
  };
};
const authActions = {
  setAuthUser: (
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
  ) =>
    ({
      type: SET_AUTH_USER,
      payload: { userId, login, email, isAuth },
    } as const),
  setCaptchaUrl: (url: string) => ({ type: SET_CAPTCHA_URL, url } as const),
  setError: (error: string) => ({ type: SET_ERROR, error } as const),
};

export const getAuthUser =
  (): ThunkType<ActionsTypes | UsersActionsType> => async (dispatch) => {
    dispatch(usersActions.toggleIsLoading(true));
    const data = await AuthAPI.me();
    const { id, login, email } = data.data;
    if (data.resultCode === ResultCodesEnum.Succses) {
      dispatch(authActions.setAuthUser(id, login, email, true));
    }
    dispatch(usersActions.toggleIsLoading(false));
  };

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: null
  ): ThunkType<ActionsTypes> =>
  async (dispatch) => {
    const data = await AuthAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Succses) {
      dispatch(getAuthUser());
      dispatch(authActions.setError(""));
    } else {
      if (data.resultCode === ResultCodesEnum.CaptchaIsRequired) {
        dispatch(getCaptcha());
      }
      const error = data.messages[0] ?? "Invalid email or password";
      dispatch(authActions.setError(error));
      // dispatch(stopSubmit("login", { _error: error }));
    }
  };

export const logout = (): ThunkType<ActionsTypes> => async (dispatch) => {
  const data = await AuthAPI.logout();
  if (data.resultCode === ResultCodesEnum.Succses) {
    dispatch(authActions.setAuthUser(null, null, null, false));
  }
};

export const getCaptcha = (): ThunkType<ActionsTypes> => async (dispatch) => {
  const data = await SecurityAPI.getCaptchaUrl();
  const url = data.url;
  dispatch(authActions.setCaptchaUrl(url));
};

export default authReducer;
