import { CHANGE_VALUE } from "./action";

const initState = "";

export const form = (state = initState, { type, payload }) => {
  switch (type) {
    case CHANGE_VALUE:
      return payload;
    default:
      return state;
  }
};
