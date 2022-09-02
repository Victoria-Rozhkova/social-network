import { AppStateType } from "../store-redux";

export const dialogsSelector = (state: AppStateType) => {
  return state.dialogsPage.dialogs;
};

export const messagesSelector = (state: AppStateType) => {
  return state.dialogsPage.messages;
};
