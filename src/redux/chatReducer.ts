import { chatAPI, StatusType } from "./../api/chat-api";
import { ChatMessageType } from "src/api/chat-api";
import { InferActionsTypes, ThunkType } from "./store-redux";
import { Dispatch } from "redux";

const MESSAGES_RESEIVED = "chat/MESSAGES_RESEIVED";
const STATUS_CHANGED = "chat/STATUS_CHANGED";

export enum StatusesEnum {
  Pending = "pending",
  Ready = "ready",
  Error = "error",
}

const initialState = {
  messages: [] as ChatMessageType[],
  status: StatusesEnum.Pending as StatusType,
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
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

const chatActions = {
  messagesReseived: (messages: ChatMessageType[]) =>
    ({ type: MESSAGES_RESEIVED, payload: { messages } } as const),
  statusChanged: (status: StatusType) =>
    ({ type: STATUS_CHANGED, payload: { status } } as const),
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

let _statusChangedHandler: ((status: StatusType) => void) | null = null;
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
  if (_statusChangedHandler === null) {
    _statusChangedHandler = (status: StatusType) => {
      dispatch(chatActions.statusChanged(status));
      return _statusChangedHandler;
    };
  }
  return _statusChangedHandler;
};

export const startMessagesListening =
  (): ThunkType<ActionsTypes> => async (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe("messages-reseived", newMessageHandlerCreator(dispatch));
    chatAPI.subscribe("status-changed", statusChangedHandlerCreator(dispatch));
  };

export const stopMessagesListening =
  (): ThunkType<ActionsTypes> => async (dispatch) => {
    chatAPI.stop();
    chatAPI.unsubscribe(
      "messages-reseived",
      newMessageHandlerCreator(dispatch)
    );
    chatAPI.unsubscribe(
      "status-changed",
      statusChangedHandlerCreator(dispatch)
    );
  };

export const sendMessage =
  (message: string): ThunkType<ActionsTypes> =>
  async (dispatch) => {
    chatAPI.send(message);
  };

export default chatReducer;

// Types
export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof chatActions>;
