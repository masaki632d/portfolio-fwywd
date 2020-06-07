/* @jsx jsx */
import React, { FC, useState, useRef } from "react";
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

const UseRef: FC = () => {
  const [count, setCount] = useState(0);
  const buttonElement = useRef(null);

  console.log(buttonElement);

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
          <h2>useRefの練習</h2>
          <p>
            useRefを使うことでref
            objectが返ります。それをref属性として渡すことによって、refを扱うことができます。
          </p>
          <br />

          <div>
            <button
              ref={buttonElement}
              onClick={() => {
                setCount(count + 1);
              }}
            >
              ここをクリック!
            </button>
            <br />
            {"<"} {count} 回!
          </div>
        </div>
      </main>
    </>
  );
};

export default UseRef;
