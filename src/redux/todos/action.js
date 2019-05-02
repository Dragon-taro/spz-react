import { createAction } from "redux-actions";

export const ADD_TODOS = "ADD_TODOS";
export const LOAD_TODOS_SUCCESS = "LOAD_TODO_SUCCESS";
export const DELETE_TODOS = "DELETE_TODOS";
export const PUT_TODOS = "PUT_TODOS";

export const addTodo = createAction(ADD_TODOS);
export const loadTodosSuccess = createAction(LOAD_TODOS_SUCCESS);
export const deleteTodo = createAction(DELETE_TODOS);
export const putTodo = createAction(PUT_TODOS);
