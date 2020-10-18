import * as types from "./types";
import { CountModel } from "../../models/Counter";

export const initialState = new CountModel();

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state.increment(action.num);
    case types.DECREMENT:
      return state.decrement(action.num);
    default:
      return state;
  }
};
