// export type Action = { type: "ADD"; payload: string };
// import { postQuestion, getQuestion } from '../../api/Questions'
import * as types from "./types";

export const addNote = (dispach) => async (note: string): Promise<void> => {
  // const awaitの記述はナシ？

  dispach({
    type: types.ADD,
    // payload: note,
    payload: { note: note },
  });
};
