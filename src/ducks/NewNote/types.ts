// export const ADD_NOTE = "portfolio/ADD_NOTE";
export const ADD = "ADD_NOTE";

export interface NewNoteState {
  notes: string[];
  // notes: NewNoteType;
}

// Actionの名前を変更
export interface NewNoteAction {
  type: typeof ADD;
  payload: string;
}

export type NewNoteActionTypes = NewNoteAction;
