import React, { FC, useState } from 'react'
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

const UseState: FC = () => {
  const [a, b] = useState(0)
  const [_a, _b] = useState('!')

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
          <h2>useStateの練習</h2>
          <p>
            useStateを使うと、functional
            componentがstateを扱えるようになります。
          </p>
          <br />

          <div>
            <button
              onClick={() => {
                b(a + 1)
              }}
            >
              ここをクリック!
            </button>
            <br />
            {a}回
            <br />
            <br />
            <button
              onClick={() => {
                _b(`${_a}!`)
              }}
            >
              ここをクリック!
            </button>
            <br />
            「!」量産{_a}
          </div>
        </div>
      </main>
    </>
  )
}

export default UseState
