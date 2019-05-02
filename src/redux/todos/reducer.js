import {
  ADD_TODOS,
  DELETE_TODOS,
  PUT_TODOS,
  LOAD_TODOS_SUCCESS
} from "./action";

const initState = [];

export const todos = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODOS:
      return [...state, payload];
    case LOAD_TODOS_SUCCESS:
      return payload;
    case DELETE_TODOS:
      return payload;
    case PUT_TODOS:
      return payload;
    default:
      return state;
  }
};
