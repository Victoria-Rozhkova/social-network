import { v1 } from "uuid";

import { InferActionsTypes } from "@/redux/store-redux";
import img from "@/assets/images/default-img.png";

const SEND_NEW_MESSAGE = "DIALOGS/SEND_NEW_MESSAGE";

export type DialogType = {
  id: number;
  img: typeof img;
  name: string;
};

export type MessageType = {
  id: number;
  img: typeof img;
  message: string;
};

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actionsDialogs>;

const initialState = {
  dialogs: [
    {
      id: 1,
      img: img,
      name: "Ann",
    },
    {
      id: 2,
      img: img,
      name: "Sam",
    },
    {
      id: 3,
      img: img,
      name: "John",
    },
  ] as Array<DialogType>,
  messages: [
    {
      id: 1,
      img: img,
      message: "Hi",
    },
    {
      id: 2,
      img: img,
      message: "How are you?",
    },
  ] as Array<MessageType>,
};

const dialogsReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SEND_NEW_MESSAGE: {
      if (action.message) {
        const newMessage = {
          id: v1(),
          img: state.dialogs[0].img,
          message: action.message,
        };
        const stateCopy = { ...state };
        stateCopy.messages = [...state.messages];
        stateCopy.messages.push(newMessage);
        return stateCopy;
      }
      return state;
    }
    default:
      return state;
  }
};

export const actionsDialogs = {
  sendNewMessage: (message: string) => {
    return { type: SEND_NEW_MESSAGE, message } as const;
  },
};

export default dialogsReducer;
