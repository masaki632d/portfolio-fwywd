// /* @jsx jsx */
// import React, { FC, useContext, ChangeEvent } from "react";
// import { jsx } from "@emotion/core";

// import { newNoteActions } from "../../ducks/NewNote";
// import { NewNoteContext } from "../../context/NewNote";

// interface NewNoteProps {
//   addNote(note: string): void;
// }

// // 疑問：asyncとawaitを利用することは分かったが、
// // postとshowは今回の場合も使用する？
// export const NewNote: FC<NewNoteProps> = () => {
//   const { dispatch, state } = useContext(NewNoteContext);

//   const [note, setNote] = React.useState("");

//   const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
//     setNote(event.target.value);
//   };

//   const onAddNoteClick = () => {
//     newNoteActions.addNote(dispatch, note);
//     setNote("");
//   };

//   return (
//     <div>
//       <input
//         onChange={updateNote}
//         value={note}
//         type="text"
//         name="note"
//         placeholder="Note"
//       />
//       <button onClick={onAddNoteClick}>Add note</button>
//     </div>
//   );
// };
