// オブジェクトの中身や要素が増えてきた場合は、immutable使う方が良い　データのハンドリングがしやすくなる    大規模の場合 インスタンスメソッドを使って
import * as types from './types'

export const initialState: types.CounterState = {
  counter: undefined,
}

export default (
  state = initialState,
  action: types.CounterActionTypes
): types.CounterState => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        counter: action.payload.counter,
        // counter: 1,
      }
    case types.DECREMENT:
      return {
        counter: action.payload.counter,
        // counter: -1,
      }
    default:
      return state
  }
}
