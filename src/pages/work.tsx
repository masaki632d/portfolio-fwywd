/* @jsx jsx */
import React, { FC } from "react";
import Head from "next/head";
import { css, jsx } from "@emotion/core";

import DefinitionContents from "../components/molecules/DefinitionContents";
import EmbedContents from "../components/molecules/EmbedContents";
import GlobalMenus from "../components/molecules/GlobalMenus";
import MainTitle from "../components/atoms/MainTitle";
import BasicButton from "../components/atoms/BasicButton";

const mainBox = css`
  margin-bottom: 40px;
`;

const workContents = [
  {
    subTitle: "ナビナビキャッシング",
    dt1: "概要",
    dd1: "テキストテキストテキストテキスト",
  },
];
const sessionContents = [
  {
    subTitle: "ReactのメリットとAtomic Designとの相性",
    text1: "<time>2020/02</time>",
    text2:
      "技術のアップデートの恩恵を受けるために、HTMLとCSSの知識をアップデートしましょう！<br />比較的新しいHTML要素やCSSプロパティの紹介と、アップデートの情報はどこに取りにいったらいいのかをご紹介します。",
    dataId: "403b551675214fa09f9d5a9839a8d8ad",
    dataRatio: "1.77777777777778",
  },
];

export default function work() (
    <>
      <Head>
        <title>work</title>
      </Head>

      <main css={mainBox}>
        <section>
          <MainTitle text={"Work"} />
          <DefinitionContents dlContents={workContents} />
        </section>
        <section>
          <MainTitle text={"Session"} />
          <EmbedContents textContents={sessionContents} />
        </section>
        <section>
          <MainTitle text={"Other"} />
          <div css={buttonBox}>
            <BasicButton
              text={"Qiita"}
              href={"https://qiita.com/masaki632d"}
              target={"_blank"}
            />
            <BasicButton
              text={"github"}
              href={"https://github.com/masaki632d"}
              target={"_blank"}
            />
          </div>
        </section>
      </main>
      <GlobalMenus />
    </>
  )
