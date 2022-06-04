import img from "../img/img.png";

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
    if (action.type === "ADD_POST") {
      const newPost = {
        id: 3,
        post: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._renderUI(this._state);
      this._state.profilePage.newPostText = "";
    } else if (action.type === "UPDATE_TEXT_POST") {
      this._state.profilePage.newPostText = action.newText;
      this._renderUI(this._state);
    } else if (action.type === "UPDATE_TEXT_MESSAGE") {
      this._state.dialogsPage.newMessage = action.message;
      this._renderUI(this.state);
    } else if (action.type === "WRITE_NEW_MESSAGE") {
      const newMessage = {
        id: 6,
        img: img,
        message: this._state.dialogsPage.newMessage,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._renderUI(this._state);
      this._state.dialogsPage.newMessage = "";
    }
  },
};

export default store;
