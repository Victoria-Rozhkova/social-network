import img from '../img/img.png'
import {
  renderUI
} from './render';

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
    ]
  }
}

export const addPost = (text) => {
  const newPost = {
    id: 3,
    post: text,
    likesCount: 0,
  }
  state.profilePage.posts.push(newPost)
  renderUI(state)
}

export default state;