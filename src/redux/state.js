import img from '../img/img.png'

let store = {
  _state: {
    profilePage: {
      posts: [{
          id: 1,
          post: 'Hey from props',
          likesCount: 5,
        },
        {
          id: 2,
          post: 'Hello from map',
          likesCount: 3,
        },
      ],
      newPostText: 'test',
    },
    dialogsPage: {
      dialogs: [{
          id: 1,
          img: img,
          name: 'Ann',
        },
        {
          id: 2,
          img: img,
          name: 'Sam',
        },
        {
          id: 3,
          img: img,
          name: 'John',
        },
      ],
      messages: [{
          id: 1,
          img: img,
          message: 'Hi'
        },
        {
          id: 2,
          img: img,
          message: 'How are you?'
        },
      ],
      newMessage: 'test message',
    }
  },
  getState() {
    return this._state;
  },
  renderUI() {
    console.log('state changed')
  },
  addPost() {
    const newPost = {
      id: 3,
      post: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this.renderUI(this._state);
    this._state.profilePage.newPostText = '';
  },
  writeNewMessage() {
    const newMessage = {
      id: 6,
      img: img,
      message: this._state.dialogsPage.newMessage,
    }
    this._state.dialogsPage.messages.push(newMessage);
    this.renderUI(this._state);
    this._state.dialogsPage.newMessage = '';
  },
  updateTextPost(text) {
    this._state.profilePage.newPostText = text;
    this.renderUI(this._state);
  },
  updateTextMessage(message) {
    this._state.dialogsPage.newMessage = message;
    this.renderUI(this.state)
  },
  subscribe(observer) {
    this.renderUI = observer;
  }
}

export default store;