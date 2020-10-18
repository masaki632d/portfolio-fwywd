import React, { useReducer, createContext } from "react";
import reducer, { counterInitialState } from "../ducks/Counter";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, counterInitialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
