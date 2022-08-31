import { getAuthUser } from "./authReduser";

const INITIALIZATION = "INITIALIZATION ";

export type InitialStateType = {
  initialization: boolean;
};

let initialState: InitialStateType = {
  initialization: false,
};

type ActionsTypes = SetInitialActionType;

const appReduser = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
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
// type ThunkType = ThunkAction<
//   Promise<void>,
//   AppStateType,
//   unknown,
//   ActionsTypes
// >;
export const initializeApp = () => {
  return (dispatch:any) => {
    const promise = dispatch(getAuthUser());
    promise.then(() => {
      dispatch(setInitial());
    });
  };
};

export default appReduser;
