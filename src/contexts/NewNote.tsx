import { createContext, useReducer } from 'react'
import reducer, { newNoteInitialState, newNoteActions } from '../ducks/NewNote'

export const NewNoteContext = createContext({
  state: undefined,
  actions: undefined,
})

export const NewNoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, newNoteInitialState)
  const actions = {
    addNote: newNoteActions.addNote(dispatch),
  }

  return (
    <NewNoteContext.Provider value={{ state, actions }}>
      {children}
    </NewNoteContext.Provider>
  )
}
