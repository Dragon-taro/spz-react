import { form } from "./form/reducer";
import { todo } from "./todo/reducer";
import { combineReducers } from "redux";

export default combineReducers({ form, todo });
