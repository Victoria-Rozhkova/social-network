import { ProfileAxios } from "../api/api";
import { toggleIsLoading } from "./usersReduser";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";

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

export const getProfile = (id) => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true));
    ProfileAxios.getProfiles(id).then((data) => {
      dispatch(setUserProfile(data));
      dispatch(toggleIsLoading(false));
    });
  };
};
export const getStatus = (id) => {
  return (dispatch) => {
    ProfileAxios.getStatus(id).then((data) => {
      dispatch(setStatus(data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    ProfileAxios.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReduser;
