/* @jsx jsx */
import React, { FC } from "react";
import { css, jsx } from "@emotion/core";

const styles = {
  box: css`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `,
  list: css`
    width: 20%;
    text-align: center;
    margin-bottom: 30px;
    img {
      width: auto;
      height: 50px;
      margin: 0 auto 10px;
    }
  `,
  title: css`
    font-weight: bold;
  `,
};

interface SortContentsProps {
  sortContents: any;
  levels: any;
}

const SortContents: FC<SortContentsProps> = ({ sortContents, levels }) => {
  let levelStr = "";
  let levelColor = "";
  let image_url = "";

  return (
    <ul css={styles.box}>
      {sortContents.map((sortContent) => {
        // level表記をテキストに置き換え
        levels.map((level) => {
          if (sortContent.level === level.id) {
            levelStr = level.text;
            levelColor = level.color;
          }
        });
        image_url = `/images/skill/${sortContent.image}`;
        return (
          <li css={styles.list} key={sortContent.id}>
            <img src={image_url} />
            <p css={styles.title}>{sortContent.text}</p>
            <p>{levelStr}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default SortContents;
