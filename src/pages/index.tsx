/** @jsx jsx */
import React, { FC } from "react";
import { css, jsx } from "@emotion/core";
import Head from "next/head";

import ListContents from "../components/molecules/ListContents";
import GlobalMenus from "../components/molecules/GlobalMenus";
import MainTitle from "../components/atoms/MainTitle";
import SubTitle from "../components/atoms/SubTitle";

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

const todoText = [
  "Next.jsで別ページに遷移できるようにする",
  "use●●を使ってみる",
  "（hooks参考記事）：https://qiita.com/YutamaKotaro/items/ef0430f570779dcf8a26",
];

const reviewText = ["20200601：●●を修正"];

const ruleText = [
  "なるべくTypescriptで記述する",
  "コンポーネント設計はAtomicDesignを踏襲",
  "色やフォントサイズなどは共通化",
];

const Home: FC = () => (
  <>
    <Head>
      <title key="title">トップ</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>
      <a href="/" css={styles.title}>
        Masahiro Koumura Portfolio
      </a>
    </h1>

    <GlobalMenus />

    <main>
      <div css={styles.contentsBox}>
        <MainTitle text={"Top"} />
        <SubTitle text={"Todo"} />
        <ListContents listContents={todoText} />

        <SubTitle text={"レビュー内容"} />
        <ListContents listContents={reviewText} />

        <SubTitle text={"作成ルール　メモ"} />
        <ListContents listContents={ruleText} />
      </div>
    </main>
  </>
);

export default Home;
