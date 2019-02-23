import { createAction } from "redux-actions";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const PUT_TODO = "PUT_TODO";

export const addTodo = createAction(ADD_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const putTodo = createAction(PUT_TODO);
