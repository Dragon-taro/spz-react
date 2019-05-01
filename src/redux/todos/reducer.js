import { ADD_TODOS, DELETE_TODOS, PUT_TODOS } from "./action";

const initState = [{ id: 1, content: "hello world!", done: false }];

export const todos = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODOS:
      return [...state, payload];
    case DELETE_TODOS:
      return payload;
    case PUT_TODOS:
      return payload;
    default:
      return state;
  }
};
