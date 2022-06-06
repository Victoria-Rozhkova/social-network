import img from "../img/img.png";
import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          post: "Hey from props",
          likesCount: 5,
        },
        {
          id: 2,
          post: "Hello from map",
          likesCount: 3,
        },
      ],
      newPostText: "test",
    },
    dialogsPage: {
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
      newMessage: "test message",
    },
  },
  _renderUI() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._renderUI = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._renderUI(this._state);
  },
};
export default store;
