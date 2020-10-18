import React, { useContext } from "react";
import { CounterContext } from "../../contexts/Counter";
import { counterActions } from "../../ducks/Counter";

export const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <>
      count: {state.count}
      <div>
        <button onClick={() => counterActions.increment(dispatch, 3)}>+</button>
        <button onClick={() => counterActions.decrement(dispatch, 5)}>-</button>
      </div>
    </>
  );
};
