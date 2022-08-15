import { getAuthUser } from "./authReduser";

const INITIALIZATION = "INITIALIZATION ";

export type initialStateType = {
  initialization: boolean;
};

let initialState: initialStateType = {
  initialization: false,
};

const appReduser = (state = initialState, action: any) => {
  switch (action.type) {
    case INITIALIZATION:
      return {
        ...state,
        initialization: true,
      };
    default:
      return state;
  }
};

export const setInitial = () => {
  return { type: INITIALIZATION };
};

export const initializeApp = () => {
  return (dispatch: any) => {
    const promise = dispatch(getAuthUser());
    promise.then(() => {
      dispatch(setInitial());
    });
  };
};

export default appReduser;
