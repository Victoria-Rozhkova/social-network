import { chatAPI } from "./../api/chat-api";

import { ChatMessageType } from "src/api/chat-api";
import { InferActionsTypes, ThunkType } from "./store-redux";
import { Dispatch } from "redux";

const MESSAGES_RESEIVED = "chat/MESSAGES_RESEIVED";
export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof chatActions>;

const initialState = {
  messages: [] as ChatMessageType[],
};

const chatReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case MESSAGES_RESEIVED:
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages],
      };
    default:
      return state;
  }
};

const chatActions = {
  messagesReseived: (messages: ChatMessageType[]) =>
    ({ type: MESSAGES_RESEIVED, payload: { messages } } as const),
};

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;

const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages: ChatMessageType[]) => {
      dispatch(chatActions.messagesReseived(messages));
      return _newMessageHandler;
    };
  }
  return _newMessageHandler;
};

export const startMessagesListening =
  (): ThunkType<ActionsTypes> => async (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe(newMessageHandlerCreator(dispatch));
  };

export const stopMessagesListening =
  (): ThunkType<ActionsTypes> => async (dispatch) => {
    chatAPI.stop();
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch));
  };

export const sendMessage =
  (message: string): ThunkType<ActionsTypes> =>
  async (dispatch) => {
    chatAPI.send(message);
  };

export default chatReducer;
