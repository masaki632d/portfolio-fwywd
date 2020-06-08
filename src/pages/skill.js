/* @jsx jsx */
import React, { FC, useState, useMemo, useEffect } from "react";
import Head from "next/head";
import { css, jsx } from "@emotion/core";

import ListContents from "../components/molecules/ListContents";
import SortContents from "../components/molecules/SortContents";
import GlobalMenus from "../components/molecules/GlobalMenus";
import MainTitle from "../components/atoms/MainTitle";
import SubTitle from "../components/atoms/SubTitle";
import SortButton from "../components/atoms/SortButton";

const styles = {
  box2: css`
    margin-bottom: 3rem;
  `,
  box: css`
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
  `,
  text: css`
    margin-left: 1.5rem;
    font-size: 1rem;
  `,
};

export default function Qualification() {
  const canList = [
    "サイト情報設計",
    "ディレクション・スケジュール管理",
    "テキスト",
  ];
  const skillInfo = {
    skillList: [
      {
        id: 1,
        text: "HTML, CSS",
        image: "icon_css3.svg",
        level: 1,
      },
      {
        id: 2,
        text: "Sass",
        image: "icon_sass.svg",
        level: 3,
      },
      {
        id: 3,
        text: "Bootstrap",
        image: "icon_bootstrap.svg",
        level: 4,
      },
      {
        id: 4,
        text: "Javascript",
        image: "icon_javascript.svg",
        level: 3,
      },
      {
        id: 5,
        text: "jQuery",
        image: "icon_jquery.svg",
        level: 2,
      },
      {
        id: 6,
        text: "React",
        image: "icon_react.svg",
        level: 3,
      },
      {
        id: 7,
        text: "WordPress",
        image: "icon_wordpress.svg",
        level: 4,
      },
      {
        id: 8,
        text: "Git",
        image: "icon_git.svg",
        level: 2,
      },
      {
        id: 9,
        text: "Design",
        image: "icon_design.svg",
        level: 4,
      },
      {
        id: 10,
        text: "Prototype",
        image: "icon_prototype.svg",
        level: 3,
      },
      {
        id: 11,
        text: "LPO",
        image: "icon_lpo.svg",
        level: 3,
      },
      {
        id: 12,
        text: "UX",
        image: "icon_ux.svg",
        level: 3,
      },
      {
        id: 13,
        text: "Direction",
        image: "icon_direction.svg",
        level: 2,
      },
    ],

    toolList: [
      {
        id: 1,
        text: "Adobe XD",
        image: "icon_xd.svg",
        level: 3,
      },
      {
        id: 2,
        text: "Adobe Photoshop",
        image: "icon_photoshop.svg",
        level: 3,
      },
    ],

    level: [
      {
        id: 1,
        text: "very high",
        color: "#DD6677",
      },
      {
        id: 2,
        text: "high",
        color: "#DE9066",
      },
      {
        id: 3,
        text: "normal",
        color: "#66B4DE",
      },
      {
        id: 4,
        text: "low",
        color: "#539946",
      },
    ],
  };

  const [sort, setSort] = useState({});
  const [sortkey, setSortkey] = useState("ID");
  const keys = ["id", "level"];

  // 並び替えボタンがクリック
  const handleSort = (key) => {
    if (sort.key === key) {
      // 直前と同じボタンをクリック（keyは同じで反転）
      setSort({ ...sort, order: -sort.order });
    } else {
      // 直前とは異なるボタンをクリック（新しいkeyで降順）
      setSort({
        key: key,
        order: 1,
      });
    }
  };

  // sort結果に変化があった場合、メソッドの返り値を格納
  useMemo(() => {
    // 参照代入
    let list = skillInfo.skillList;
    if (sort.key) {
      list = list.sort((a, b) => {
        a = a[sort.key];
        b = b[sort.key];

        if (a === b) {
          return 0;
        }
        if (a > b) {
          return 1 * sort.order;
        }
        if (a < b) {
          return -1 * sort.order;
        }
      });
    }
  }, [skillInfo.skillList]);

  // 無限ループを防ぐために Hooks のトリガーを上記と分ける
  useEffect(() => {
    setSortkey(sort.key);
  }, [skillInfo.skillList]);

  return (
    <div>
      <Head>
        <title>skill</title>
      </Head>

      <GlobalMenus />

      <main>
        <MainTitle text={"Skill"} />

        <section css={styles.box2}>
          <SubTitle text={"私ができること"} />
          <ListContents listContents={canList} />
        </section>

        <section css={styles.box2}>
          <SubTitle text={"skill"} />
          <div css={styles.box}>
            {keys.map((key, index) => (
              <SortButton key={index} text={key} handleSort={handleSort} />
            ))}
            <p css={styles.text}>表示順：{sortkey || "ID"}</p>
          </div>
          <SortContents
            sortContents={skillInfo.skillList}
            levels={skillInfo.level}
          />
        </section>

        <section css={styles.box2}>
          <SubTitle text={"tool"} />
          <SortContents
            sortContents={skillInfo.toolList}
            levels={skillInfo.level}
          />
        </section>
      </main>
    </div>
  );
}
