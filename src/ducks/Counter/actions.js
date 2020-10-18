import * as types from "./types";

// 質問：valueは必要ない？
export const increment = async (dispatch, value) => {
  await dispatch({ type: types.INCREMENT, num: value });
};
export const decrement = async (dispatch, value) => {
  await dispatch({ type: types.DECREMENT, num: value });
};
