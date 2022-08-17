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

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser,
  auth: authReduser,
  form: formReducer,
  app: appReduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  redusers,
  composeEnhancers(compose(applyMiddleware(thunkMiddleware)))
);

// let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;
