export const usersSelector = (state) => {
  return state.usersPage.users;
};

export const pagesSelector = (state) => {
  return state.usersPage.pageSize;
};

export const totalPageCountSelector = (state) => {
  return state.usersPage.totalPageCount;
};

export const currentPageSelector = (state) => {
  return state.usersPage.currentPage;
};

export const isLoadingSelector = (state) => {
  return state.usersPage.isLoading;
};

export const followingInProgressSelector = (state) => {
  return state.usersPage.followingInProgress;
};

export const portionSizeSelector = (state) => {
  return state.usersPage.portionSize;
};
