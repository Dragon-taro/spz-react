import { ADD_TODO, DELETE_TODO, PUT_TODO } from "./action";

const initState = [{ id: 1, content: "hello world!", done: false }];

// todosの方がよかった。。
export const todo = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case DELETE_TODO:
      return payload;
    case PUT_TODO:
      return payload;
    default:
      return state;
  }
};
