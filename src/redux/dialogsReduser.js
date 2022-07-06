import img from "../img/img.png";
const SEND_NEW_MESSAGE = "SEND_NEW_MESSAGE";

let initialState = {
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
  ],
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
  ],
};

const dialogsReduser = (state = initialState, action) => {
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

export const sendNewMessage = (message) => {
  return { type: SEND_NEW_MESSAGE, message };
};

export default dialogsReduser;
