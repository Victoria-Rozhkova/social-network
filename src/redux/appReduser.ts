import { getAuthUser } from "./authReduser.ts";

const INITIALIZATION = "INITIALIZATION ";

export type InitialStateType = {
  initialization: boolean;
};

let initialState: InitialStateType = {
  initialization: false,
};

const appReduser = (state = initialState, action: any): InitialStateType => {
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

type SetInitialActionType = {
  type: typeof INITIALIZATION;
};

export const setInitial = (): SetInitialActionType => {
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
