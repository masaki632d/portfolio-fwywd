// breakpoint async系  非同期系はbreakpointできない
// actionが呼ばれているか  callされているか  reducerで呼ばれているか
// デバッグで　action typeとpayloadが渡されてくるかの確認
// ボタンをクリックした時に動いているかどうかの確認

import * as types from './types'

export const increment = async (
  dispatch: any
  // counter: number
): Promise<void> => {
  // consoleで確認OK!
  console.log('incrementボタン')

  // counter
  await dispatch({ type: types.INCREMENT })
}

export const decrement = async (dispatch: any): Promise<void> => {
  // consoleで確認OK!
  console.log('decrementボタン')

  await dispatch({ type: types.DECREMENT })
}

// actionをつくるたびにこちらに記述しないといけない？
