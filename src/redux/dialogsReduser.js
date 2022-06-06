const UPDATE_TEXT_MESSAGE = "UPDATE_TEXT_MESSAGE";
const SEND_NEW_MESSAGE = "SEND_NEW_MESSAGE";

const dialogsReduser = (state, action) => {
  switch (action.type) {
    case UPDATE_TEXT_MESSAGE:
      state.newMessage = action.message;
      return state;
    case SEND_NEW_MESSAGE:
      const newMessage = {
        id: 6,
        img: state.dialogs[0].img,
        message: state.newMessage,
      };
      state.messages.push(newMessage);
      state.newMessage = "";
      return state;
    default:
      return state;
  }
};

export const sendNewMessageActionCreator = () => {
  return { type: SEND_NEW_MESSAGE };
};
export const updateTextMessageActionCreator = (message) => {
  return { type: UPDATE_TEXT_MESSAGE, message: message };
};

export default dialogsReduser;
