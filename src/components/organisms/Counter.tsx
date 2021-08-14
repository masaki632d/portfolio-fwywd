import React, { FC, useContext } from 'react'

// import { counterActions } from "../../ducks/Counter";
import { CounterContext } from '../../contexts/Counter'

// NewNoteContext.tsxを参考に？
// ここを修正
// interface CounterProps {
//   increment: void;
//   // dispatch: any;
// }

// increment: counterActions.increment(dispatch),

export const Counter: FC = () => {
  const { state, actions } = useContext(CounterContext)

  // マネップの書き方じゃない　ぶつかってるのでどっちかに揃える必要
  return (
    <div>
      count: {state.count}
      <div>
        <button
          onClick={() => {
            actions.increment
          }}
        >
          +
        </button>
        <button onClick={() => actions.decrement}>-</button>
      </div>
    </div>
  )
}
