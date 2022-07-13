import { getAuthUser } from "./authReduser";

const INITIALIZATION = "INITIALIZATION ";

let initialState = {
  initialization: false,
};

const appReduser = (state = initialState, action) => {
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
  return (dispatch) => {
    const promise = dispatch(getAuthUser());
    promise.then(() => {
      dispatch(setInitial());
    });
  };
};

export default appReduser;
