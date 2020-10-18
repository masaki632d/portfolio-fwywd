/** @jsx jsx */
import React, { FC, Fragment } from "react";
import { css, jsx } from "@emotion/core";
import Head from "next/head";

import { useSelector, useDispatch } from "react-redux";
// import { NewNoteProvider } from "../context/NewNote";

// import { NewNote } from "../components/organisms/NewNote";
// import CounterBox from "../components/useContext_Sample";

import { CounterProvider } from "../contexts/Counter";
import { Counter } from "../components/organisms/Counter";

import ListContents from "../components/molecules/ListContents";
import GlobalMenus from "../components/molecules/GlobalMenus";
import MainTitle from "../components/atoms/MainTitle";
import SubTitle from "../components/atoms/SubTitle";

import Link from "next/link";

const styles = {
  title: css`
    color: #333;
    font-size: 1rem;
    padding: 0 15px;
    text-decoration: none;
    transition: all 0.25s ease-in-out 0s;
    :hover {
      opacity: 0.7;
    }
  `,
  contentsBox: css`
    width: 960px;
    background-color: #f1f1f1;
    padding: 30px;
    margin: 0 auto;
  `,
  contentWrap: css`
    width: 960px;
    padding: 30px;
    margin: 0 auto;
  `,
  reduxBox: css`
    background-color: #ccc;
    margin-top: 20px;
    padding: 30px;
    h2 {
      margin-bottom: 20px;
    }
  `,
};

const ruleText = [
  "なるべくTypescriptで記述する",
  "コンポーネント設計はAtomicDesignを踏襲",
  "色やフォントサイズなどは共通化",
];

const doneText = [
  "2020-06",
  "emotion・TypeScriptの導入",
  "Next.jsで別ページに遷移できるようにする",
];

const todoText = [
  "use●●を使ってみる",
  "hooks参考記事：https://qiita.com/YutamaKotaro/items/ef0430f570779dcf8a26",
  "Reduxサンプル作ってみる",
];

const reviewText = ["20200701：●●を修正"];

const index: FC = () => {
  // const notes = useSelector<NewNoteState, NewNoteState["notes"]>(
  //   (state) => state.notes
  // );
  // const dispatch = useDispatch();

  // const onAddNote = (note: string) => {
  //   dispatch(onAddNote(note));
  // };

  return (
    <Fragment>
      <Head>
        {/* <NewNoteProvider> */}

        <title key="title">トップ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        <a href="/" css={styles.title}>
          Portfolio
        </a>
      </h1>

      <GlobalMenus />

      <main>
        <div css={styles.contentsBox}>
          <MainTitle text={"トップページ"} />

          <SubTitle text={"作成ルール　メモ"} />
          <ListContents listContents={ruleText} />

          <SubTitle text={"レビュー内容"} />
          <ListContents listContents={reviewText} />

          <SubTitle text={"完了タスク"} />
          <ListContents listContents={doneText} />

          <SubTitle text={"次のタスク"} />
          <ListContents listContents={todoText} />
        </div>

        {/* Redux　メモアプリ */}
        <div css={styles.contentWrap}>
          <h2>Reduxの練習_0831(月)</h2>
          {/* <NewNote addNote={onAddNote} /> */}
          {/* <ul>
            {notes.map((note) => {
              return <li key={note}>{note}</li>;
            })}
          </ul> */}

          {/* Reduxサンプル CounterBox */}
          <CounterProvider>
            <Counter />
          </CounterProvider>
        </div>

        <div css={styles.reduxBox}>
          <Link href="/about">
            <a>About Page</a>
          </Link>
        </div>
      </main>
      {/* </NewNoteProvider> */}
    </Fragment>
  );
};

export default index;
