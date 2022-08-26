import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import authReduser from "./authReduser.ts";
import dialogsReduser from "./dialogsReduser.ts";
import profileReduser from "./profileReduser.ts";
import usersReduser from "./usersReduser.ts";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReduser from "./appReduser.ts";

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const rootReducer = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser,
  auth: authReduser,
  form: formReducer,
  app: appReduser,
});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(compose(applyMiddleware(thunkMiddleware)))
);

// let store = createStore(rootReduser, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.__store__ = store;

export default store;
