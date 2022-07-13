import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import authReduser from "./authReduser";
import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";
import usersReduser from "./usersReduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReduser from "./appReduser";

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser,
  auth: authReduser,
  form: formReducer,
  app:appReduser
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;
