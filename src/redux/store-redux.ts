import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { useDispatch } from "react-redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./auth.reducer";
import dialogsReducer from "./dialogs.reducer";
import profileReducer from "./profile.reducer";
import usersReducer from "./users.reducer";
import appReducer from "./app.reducer";
import chatReducer from "./chat.reducer";

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export type InferActionsTypes<T> = T extends {
  [key: string]: (...arg: any[]) => infer U;
}
  ? U
  : never;

export type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  chat: chatReducer,
});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(compose(applyMiddleware(thunkMiddleware)))
);

// let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// @ts-ignore
window.__store__ = store;

export default store;
