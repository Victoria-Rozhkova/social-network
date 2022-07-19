import { ProfileAxios } from "../api/api";
import { toggleIsLoading } from "./usersReduser";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";
const DELETE_POST = "DELETE_POST";

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
  profile: null,
  status: "",
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      if (action.post) {
        const newPost = {
          id: 3,
          post: action.post,
          likesCount: 0,
        };
        let stateCopy = { ...state };
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        return stateCopy;
      }
      return state;
    }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    case UPDATE_STATUS:
      return { ...state, status: action.status };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    default:
      return state;
  }
};

export const addPost = (post) => {
  return { type: ADD_POST, post };
};
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const deletePost = (postId) => {
  return { type: DELETE_POST, postId };
};

export const getProfile = (id) => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  const data = await ProfileAxios.getProfiles(id);
  dispatch(setUserProfile(data));
  dispatch(toggleIsLoading(false));
};

export const getStatus = (id) => async (dispatch) => {
  const data = await ProfileAxios.getStatus(id);
  dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
  const data = await ProfileAxios.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReduser;
