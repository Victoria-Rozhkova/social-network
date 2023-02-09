import { AppStateType } from "../store-redux";

export const chatMessagesSelector = (state: AppStateType) => {
  return state.chat.messages;
};
export const chatStatusSelector = (state: AppStateType) => {
  return state.chat.status;
};
