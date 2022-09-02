import { AppStateType } from "../store-redux";

export const userIdSelector = (state: AppStateType) => {
  return state.auth.userId;
};

export const isAuthSelector = (state: AppStateType) => {
  return state.auth.isAuth;
};

export const loginSelector = (state: AppStateType) => {
  return state.auth.login;
};