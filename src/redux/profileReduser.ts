import { PostType, ProfileType, PhotosType } from './../types/types';
import { stopSubmit } from "redux-form";
import { ProfileAxios } from "../api/api";
import { toggleIsLoading } from "./usersReduser.ts";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";
const DELETE_POST = "DELETE_POST";
const SET_PHOTO = "SET_PHOTO";

const initialState = {
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
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
};

type InitialStateType = typeof initialState;

const profileReduser = (
  state = initialState,
  action: any
): InitialStateType => {
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
    case SET_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    default:
      return state;
  }
};

type AddPostActionType = { type: typeof ADD_POST; post: string };
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
type SetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};
type DeletePostActionType = {
  type: typeof DELETE_POST;
  postId: number;
};
type SetPhotoActionType = {
  type: typeof SET_PHOTO;
  photos: PhotosType;
};

export const addPost = (post: string): AddPostActionType => {
  return { type: ADD_POST, post };
};
export const setUserProfile = (
  profile: ProfileType
): SetUserProfileActionType => {
  return { type: SET_USER_PROFILE, profile };
};
export const setStatus = (status: string): SetStatusActionType => {
  return { type: SET_STATUS, status };
};
export const deletePost = (postId: number): DeletePostActionType => {
  return { type: DELETE_POST, postId };
};
export const setPhoto = (photos: PhotosType): SetPhotoActionType => {
  return { type: SET_PHOTO, photos };
};

export const getProfile = (id: number) => async (dispatch: any) => {
  dispatch(toggleIsLoading(true));
  const data = await ProfileAxios.getProfiles(id);
  dispatch(setUserProfile(data));
  dispatch(toggleIsLoading(false));
};

export const getStatus = (id: number) => async (dispatch: any) => {
  const data = await ProfileAxios.getStatus(id);
  dispatch(setStatus(data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  const data = await ProfileAxios.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  const data = await ProfileAxios.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(setPhoto(data.data.photos));
  }
};

export const updateProfile =
  (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const data = await ProfileAxios.saveProfile(profile);
    const userId = getState().auth.userId;
    if (data.resultCode === 0) {
      dispatch(getProfile(userId));
    } else {
      const error = data.messages[0] ?? "Error";
      dispatch(stopSubmit("edit-profile", { _error: error }));
      return Promise.reject();
    }
  };

export default profileReduser;
