/** @jsx jsx */
import React, { FC } from "react";
import Head from "next/head";
import { css, jsx } from "@emotion/core";

import TextContentsAria from "../components/organisms/TextContentsAria";
import GlobalMenus from "../components/molecules/GlobalMenus";
import BasicButton from "../components/atoms/BasicButton";

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

export default function About() {
  const textContents = [
    {
      subTitle: "幸村 昌裕について",
      text1:
        "琵琶湖で有名な滋賀県出身、Webデザイナーの幸村 昌裕です。<br />滋賀県出身ということで、仕事の中では近江商人の経営哲学である「売り手よし、買い手よし、世間よし」の『三方良し』の精神を大切にしております。",
      text2:
        "現在は株式会社エイチームフィナジーのWebデザイナーとして、LPO・UI/UX改善・WordpressサイトのReactへのリプレイスなどを担当しております。",
      text3: "Webデザイン・フロントエンド・費用対効果のある施策が好きです。",
    },
  ];

  return (
    <>
      <Head>
        <title>about</title>
      </Head>

      <h1>
        <a href="/" css={styles.title}>
          Masahiro Koumura Portfolio
        </a>
      </h1>

      <GlobalMenus />

      <main>
        <div css={styles.contentsBox}>
          <TextContentsAria title={"About"} textContents={textContents} />

          <BasicButton
            text="github"
            href="https://github.com/masaki632d/portfolio"
            target="_blank"
          />
        </div>
      </main>
    </>
  );
}
