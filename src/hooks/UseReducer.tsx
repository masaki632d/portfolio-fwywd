import React, { FC, useState, useReducer } from 'react'
import { css } from '@emotion/react'

import GlobalMenus from '../components/molecules/GlobalMenus'

const styles = {
  title: css`
    color: #3da9fc;
    font-size: 2.4rem;
    text-decoration: none;
    transition: all 0.25s ease-in-out 0s;
  `,
  contentsBox: css`
    background-color: #f1f1f1;
    padding: 30px;
  `,
}

const initialState = {
  count: 0,
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const reducer = (state, action) => {
  const { type } = action
  const { count } = state

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: count + 1,
      }

    case DECREMENT:
      return {
        ...state,
        count: count - 1,
      }

    case RESET:
      return initialState

    default:
      return state
  }
}

const UseReducer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { count } = state

  return (
    <>
      <h1>
        <a href="/" css={styles.title}>
          Masahiro Koumura Portfolio
        </a>
      </h1>

      <GlobalMenus />

      <main>
        <div css={styles.contentsBox}>
          <h2>useReducerの練習</h2>
          <p>
            useStateの代替品です。useStateはシンプルな処理の実装の時に使うことが好ましく、複雑のstate管理がある場合の実装には好ましくありません。
          </p>
          <br />
          <p>
            このような場面でuseReducerを使います。useReducerは複雑なstate管理するのに大いに役に立ちます。
          </p>
          <br />
          <p>
            useReducerはuseStateの代替品なので、複雑なstate管理をuseStateでも実装することは可能ですが好ましくありません。
          </p>
          <br />
          <p>
            参考記事：
            <a href="https://webotoko.com/2020/06/06/react-hooks-usereducer/">
              https://webotoko.com/2020/06/06/react-hooks-usereducer/
            </a>
          </p>
          <br />

          <div>
            <button
              onClick={() => {
                dispatch({ type: INCREMENT })
              }}
            >
              add
            </button>
            <br />
            <button
              onClick={() => {
                dispatch({ type: DECREMENT })
              }}
            >
              del
            </button>
            <br />
            <button
              onClick={() => {
                dispatch({ type: RESET })
              }}
            >
              reset
            </button>
            <br />
            <br />
            {'<'} {count} 回クリック!
          </div>
        </div>
      </main>
    </>
  )
}

export default UseReducer
