const ADD_POST = "ADD_POST";
const UPDATE_TEXT_POST = "UPDATE_TEXT_POST";

const profileReduser = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 3,
        post: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_TEXT_POST:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateTextPostActionCreator = (text) => {
  return { type: UPDATE_TEXT_POST, newText: text };
};

export default profileReduser;
