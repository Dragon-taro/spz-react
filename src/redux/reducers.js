import { form } from "./form/reducer";
import { todos } from "./todos/reducer";
import { combineReducers } from "redux";

export default combineReducers({ form, todos });
