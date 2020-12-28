import React, { createContext, useReducer } from "react";
import reducer, { counterInitialState, counterActions } from "../ducks/Counter";

export const CounterContext = createContext({
  state: undefined,
  actions: undefined,
  // dispatch: undefined,
});

//マネップ参考に何故ダメなのか調べる　ドキュメント見てみる　ReactのRedux Next.jsだけではない
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, counterInitialState);
  // ここがおかしい　ここでactionsを定義している理由？ dispatchで渡してるだけなのに、もう一回渡してる理由は？ 二重で定義しているのはなぜ？

  const actions = {
    increment: counterActions.increment(dispatch),
    decrement: counterActions.decrement(dispatch),
  };

  console.log(actions.increment);

  return (
    <CounterContext.Provider value={{ state, actions }}>
      {children}
    </CounterContext.Provider>
  );
};

// （奥山さんのやり方）stateとdispatchしか渡さない

// const a = { apple: 'red' }
// console.log(a.apple)
