import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import authReduser from "./authReduser";
import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";
import usersReduser from "./usersReduser";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReduser from "./appReduser";
import chatReducer from "./chatReducer";
import { useDispatch } from "react-redux";

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
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser,
  auth: authReduser,
  form: formReducer,
  app: appReduser,
  chat: chatReducer,
});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(compose(applyMiddleware(thunkMiddleware)))
);

// let store = createStore(rootReduser, applyMiddleware(thunkMiddleware));

export type AppDispatch = typeof store.dispatch; 
export const useAppDispatch = () => useDispatch<AppDispatch>();

// @ts-ignore
window.__store__ = store;

export default store;
