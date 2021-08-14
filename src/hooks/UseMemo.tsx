import React, { FC, useState, useMemo } from 'react'
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

const UseMemo: FC = () => {
  const [count, setCount] = useState(0)
  const newValue = useMemo(() => {
    console.log("Don't you forget?", count)

    return `${count}　push`
  }, [count])

  console.log(newValue)

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
          <h2>useMemoの練習</h2>
          <p>
            コールバックをしてくれます。
            なんか、こころやさしいおばはんみたいな機能ですかね。値が変更されるたびに内部の関数が実行されます。
          </p>
          <br />

          <div>
            <button
              onClick={() => {
                setCount(count + 1)
              }}
            >
              ここをクリック!
            </button>
            <br />
            {'<'} {count} times!
          </div>
        </div>
      </main>
    </>
  )
}

export default UseMemo
