import { getAuthUser, SetAuthUserType } from "./authReduser";
import { InferActionsTypes, ThunkType } from "./store-redux";
import { UsersActionsType } from "./usersReduser";

const INITIALIZATION = "app/INITIALIZATION ";

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof appActions>;

const initialState = {
  initialization: false,
};

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

const appActions = {
  setInitial: () => ({ type: INITIALIZATION } as const),
};

export const initializeApp =
  ():any =>
  (dispatch: any) => {
    const promise = dispatch(getAuthUser());
    promise.then(() => {
      dispatch(appActions.setInitial());
    });
  };

export default appReduser;
