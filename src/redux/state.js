import img from '../img/img.png'

const state = {
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
}

let renderUI = () => {
  console.log('state changed')
}

export const addPost = () => {
  const newPost = {
    id: 3,
    post: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  renderUI(state);
  state.profilePage.newPostText = '';
}

export const writeNewMessage = () => {
  const newMessage = {
    id: 6,
    img: img,
    message: state.dialogsPage.newMessage,
  }
  state.dialogsPage.messages.push(newMessage);
  renderUI(state);
  state.dialogsPage.newMessage = '';
}

export const updateTextPost = (text) => {
  state.profilePage.newPostText = text;
  renderUI(state);
}

export const updateTextMessage = (message) => {
  state.dialogsPage.newMessage = message;
  debugger
  renderUI(state)
}

export const subscribe = (observer) => {
  renderUI = observer;
}

export default state;