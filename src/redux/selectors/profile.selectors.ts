import { AppStateType } from "../store-redux";

export const profileSelector = (state: AppStateType) => {
  return state.profilePage.profile;
};

export const statusSelector = (state: AppStateType) => {
  return state.profilePage.status;
};

export const postsSelector = (state: AppStateType) => {
  return state.profilePage.posts;
};

export const errorSelector = (state: AppStateType) => {
  return state.profilePage.error;
};
