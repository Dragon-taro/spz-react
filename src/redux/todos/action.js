import { createAction } from "redux-actions";

export const ADD_TODOS = "ADD_TODOS";
export const DELETE_TODOS = "DELETE_TODOS";
export const PUT_TODOS = "PUT_TODOS";

export const addTodo = createAction(ADD_TODOS);
export const deleteTodo = createAction(DELETE_TODOS);
export const putTodo = createAction(PUT_TODOS);
