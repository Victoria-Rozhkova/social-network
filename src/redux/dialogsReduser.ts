import img from "../img/img.png";
import { InferActionsTypes } from "./store-redux";
const SEND_NEW_MESSAGE = "DIALOGS/SEND_NEW_MESSAGE";

type DialogType = {
  id: number;
  img: typeof img;
  name: string;
};

type MessageType = {
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

const dialogsReduser = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SEND_NEW_MESSAGE: {
      if (action.message) {
        const newMessage = {
          id: 6,
          img: state.dialogs[0].img,
          message: action.message,
        };
        let stateCopy = { ...state };
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

export default dialogsReduser;
