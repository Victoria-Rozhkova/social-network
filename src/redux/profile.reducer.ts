import { PostType, ProfileType, PhotosType } from "@/types/types";
import { ProfileAPI } from "@/api/profile-api";
import { usersActions, UsersActionsType } from "@/redux/users.reducer";
import { InferActionsTypes, ThunkType } from "@/redux/store-redux";
import { ResultCodesEnum } from "@/api/api";

const ADD_POST = "PROFILE/ADD_POST";
const SET_USER_PROFILE = "PROFILE/SET_USER_PROFILE";
const SET_STATUS = "PROFILE/SET_STATUS";
const DELETE_POST = "PROFILE/DELETE_POST";
const SET_PHOTO = "PROFILE/SET_PHOTO";
const SET_ERROR = "PROFILE/SET_ERROR";

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
  error: "",
};

type InitialStateType = typeof initialState;

type ActionsTypes = InferActionsTypes<typeof actionsProfile>;

const profileReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      if (action.post) {
        const newPost = {
          id: 3,
          post: action.post,
          likesCount: 0,
        };
        const stateCopy = { ...state };
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
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export const actionsProfile = {
  addPost: (post: string) => {
    return { type: ADD_POST, post } as const;
  },
  setUserProfile: (profile: ProfileType | null) => {
    return { type: SET_USER_PROFILE, profile } as const;
  },
  setStatus: (status: string) => {
    return { type: SET_STATUS, status } as const;
  },
  deletePost: (postId: number) => {
    return { type: DELETE_POST, postId } as const;
  },
  setPhoto: (photos: PhotosType) => {
    return { type: SET_PHOTO, photos } as const;
  },
  setError: (error: string) => {
    return { type: SET_ERROR, error } as const;
  },
};

export const getProfile =
  (id: number): ThunkType<ActionsTypes | UsersActionsType> =>
  async (dispatch) => {
    dispatch(usersActions.toggleIsLoading(true));
    const data = await ProfileAPI.getProfiles(id);
    dispatch(actionsProfile.setUserProfile(data));
    dispatch(usersActions.toggleIsLoading(false));
  };

export const getStatus =
  (id: number): ThunkType<ActionsTypes> =>
  async (dispatch) => {
    const data = await ProfileAPI.getStatus(id);
    dispatch(actionsProfile.setStatus(data));
  };

export const updateStatus =
  (status: string): ThunkType<ActionsTypes> =>
  async (dispatch) => {
    const data = await ProfileAPI.updateStatus(status);
    if (data.resultCode === ResultCodesEnum.Succses) {
      dispatch(actionsProfile.setStatus(status));
    }
  };

export const savePhoto =
  (file: File): ThunkType<ActionsTypes> =>
  async (dispatch) => {
    const data = await ProfileAPI.savePhoto(file);
    if (data.resultCode === ResultCodesEnum.Succses) {
      dispatch(actionsProfile.setPhoto(data.data.photos));
    }
  };

export const updateProfile =
  (profile: ProfileType): ThunkType<ActionsTypes> =>
  async (dispatch, getState) => {
    const data = await ProfileAPI.saveProfile(profile);
    const userId = getState().auth.userId;
    if (data.resultCode === ResultCodesEnum.Succses) {
      if (userId !== null) {
        dispatch(getProfile(userId));
        dispatch(actionsProfile.setError(""));
      }
    } else {
      const error = data.messages[0] ?? "Error";
      dispatch(actionsProfile.setError(error));
      return Promise.reject();
    }
  };

export default profileReducer;
