const ADD_POST = "ADD_POST";
const UPDATE_TEXT_POST = "UPDATE_TEXT_POST";

let initialState = {
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
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      if (state.newPostText) {
        const newPost = {
          id: 3,
          post: state.newPostText,
          likesCount: 0,
        };
        let stateCopy = { ...state };
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = "";
        return stateCopy;
      }
      return state;
    }
    case UPDATE_TEXT_POST: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPost = () => {
  return { type: ADD_POST };
};
export const updateTextPost = (text) => {
  return { type: UPDATE_TEXT_POST, newText: text };
};

export default profileReduser;
