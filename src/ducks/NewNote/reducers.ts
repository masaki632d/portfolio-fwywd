import * as types from "./types";

// export interface NewNoteState {
//   notes: string[];
// }

export const initialState: types.NewNoteState = {
  notes: [],
};

export default (
  state = initialState,
  action: types.NewNoteActionTypes
): types.NewNoteState => {
  switch (action.type) {
    case types.ADD: {
      return {
        ...state,
        notes: [...state.notes, action.payload],
        // notes: action.payload.notes,
      };
    }
    default:
      return state;
  }
};
