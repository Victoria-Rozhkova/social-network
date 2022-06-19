import img from "../img/img.png";
const UPDATE_TEXT_MESSAGE = "UPDATE_TEXT_MESSAGE";
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
  newMessage: "",
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT_MESSAGE: {
      let stateCopy = { ...state };
      stateCopy.newMessage = action.message;
      return stateCopy;
    }
    case SEND_NEW_MESSAGE: {
      if (state.newMessage) {
        const newMessage = {
          id: 6,
          img: state.dialogs[0].img,
          message: state.newMessage,
        };
        let stateCopy = { ...state };
        stateCopy.messages = [...state.messages];
        stateCopy.messages.push(newMessage);
        stateCopy.newMessage = "";
        return stateCopy;
      }
      return state;
    }
    default:
      return state;
  }
};

export const sendNewMessage = () => {
  return { type: SEND_NEW_MESSAGE };
};
export const updateTextMessage = (message) => {
  return { type: UPDATE_TEXT_MESSAGE, message: message };
};

export default dialogsReduser;
