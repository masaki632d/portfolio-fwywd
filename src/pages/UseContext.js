/* @jsx jsx */
import React, { useContext, createContext, useState } from "react";
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

const context = createContext();
const { Provider } = context;

const Child = () => {
  const count = useContext(context);
  return (
    <div>
      <span>{count.count}</span>
      <br />
      <button onClick={count.increment}>+</button>
      <br />
      <button onClick={count.decrement}>-</button>
    </div>
  );
};

export default function UseContext() {
  const [count, setCount] = useState(0);

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
          <h2>useContext</h2>
          <p>
            ReactのuseContextはコンポーネント間でのデータの受け渡しに関するHookです。useStateやuseReduceと合わせて利用することができます。
          </p>
          <br />
          <p>
            通常親コンポーネントから子コンポーネントにデータを渡す際は、propsを介して行います。親から子、そのまた子といったように複数のコンポーネントを介してデータを渡すのはpropsでは煩雑になってきます。
          </p>
          <br />
          <p>
            ReactのContext
            APIを利用するとpropsを利用せず下の階層のコンポーネントとデータの共有を行うことができます。
          </p>
          <br />
          <p>
            参考記事：
            <a href="https://reffect.co.jp/react/react-usecontext-understanding">
              https://reffect.co.jp/react/react-usecontext-understanding
            </a>
          </p>
          <br />

          <div>
            <Provider
              value={{
                count,
                increment: () => setCount(count + 1),
                decrement: () => setCount(count - 1),
              }}
            >
              <Child />
            </Provider>
          </div>
        </div>
      </main>
    </>
  );
}
