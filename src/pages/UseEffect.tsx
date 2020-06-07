/* @jsx jsx */
import React, { FC, useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";

import GlobalMenus from "../components/molecules/GlobalMenus";

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
};

const Sub = (props) => {
  const { count, hello } = props;

  useEffect(() => {
    console.log("------", count);
  }, [hello, count]);

  return <div>{count}</div>;
};

const UseEffect: FC = () => {
  const [a, b] = useState(0);
  const [_a, _b] = useState("!");

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
          <h2>useEffectの練習</h2>
          <p>データ取得やDOM変更などを扱うためにはこのhookを使います。</p>
          <br />

          <div>
            <Sub count={a} hello={_a} />
            <button
              onClick={() => {
                b(a + 1);
              }}
            >
              ここをクリック!
            </button>
            {"<"} {a}times!!
            <br />
            <button
              onClick={() => {
                _b(`${_a}!`);
              }}
            >
              <br />
              ここをクリック!
            </button>
            <br />
            {"<"} hello{_a}
          </div>
        </div>
      </main>
    </>
  );
};

export default UseEffect;
