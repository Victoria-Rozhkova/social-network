import { AppStateType } from "../store-redux";

export const usersSelector = (state: AppStateType) => {
  return state.usersPage.users;
};

export const pagesSelector = (state: AppStateType) => {
  return state.usersPage.pageSize;
};

export const totalPageCountSelector = (state: AppStateType) => {
  return state.usersPage.totalPageCount;
};

export const currentPageSelector = (state: AppStateType) => {
  return state.usersPage.currentPage;
};

export const isLoadingSelector = (state: AppStateType) => {
  return state.usersPage.isLoading;
};

export const followingInProgressSelector = (state: AppStateType) => {
  return state.usersPage.followingInProgress;
};

export const portionSizeSelector = (state: AppStateType) => {
  return state.usersPage.portionSize;
};
