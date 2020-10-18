// useContextとuseReducerを利用してグローバルにストアを利用する

import React, { useReducer, createContext, useContext } from "react";

// immutableを使ってる
// Reducer Modelの概念
// 使わないならオブジェクトで書くのも可能　typescriptでも使える
import { Record } from "immutable";

// -----------------------------------

// Acttion定義
// 依存なし
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
// typesに入る

const increment = (dispatch, value) => {
  dispatch({ type: INCREMENT, num: value });
};
const decrement = (dispatch, value) => {
  dispatch({ type: DECREMENT, num: value });
};

// -----------------------------------

// Modelの作成？？
// 依存なし

// storeに入る？　Modelディレクトリを作成する
// this
const CountRecord = Record({ count: 0 });
class CountModel extends CountRecord {
  increment(num = 1) {
    return this.set("count", this.count + num);
  }
  decrement(num = 1) {
    return this.set("count", this.count - num);
  }
}

// -----------------------------------

// reducer定義
// 依存：Model、ActionのType
// initialState = 実体化
// class（設計図）をインスタンス化（実体化　メモリ上に展開）する
const initialState = new CountModel();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state.increment(action.num);
    case DECREMENT:
      return state.decrement(action.num);
    default:
      return state;
  }
};

// -----------------------------------

// store定義
// 依存：Reducer、ModelのinitialState

// これをcontextとして書く
const Store = createContext();

// Provider定義
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

// -----------------------------------

// 利用するコンテンツ
// 依存：Store、Action
const Counter = () => {
  const { state, dispatch } = useContext(Store);

  return (
    <>
      count: {state.count}
      <div>
        <button onClick={() => increment(dispatch, 3)}> + </button>
        <button onClick={() => decrement(dispatch, 5)}> - </button>
      </div>
    </>
  );
};

// -----------------------------------

// 親コンポーネントでプロバイダ設定する　Providerで挟む
// 依存：StoreのProvider
const CounterBox = () => (
  <Provider>
    <Counter />
  </Provider>
);

export default CounterBox;
