import React, { FC, useState, useCallback } from 'react'
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

const UseCallback: FC = () => {
  const [count, setCount] = useState(0)
  const newValue = useCallback(() => {
    console.log("Don't you forget?", count)

    return `${count}　push`
  }, [Math.floor(count / 3)])

  console.log(newValue())

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
          <h2>useCallbackの練習</h2>
          <p>
            useMemoと基本的には一緒です。ただし一つだけ違う点があります。返り値が関数になっている点です。
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
            {'<'} {count} 回
          </div>
        </div>
      </main>
    </>
  )
}

export default UseCallback
