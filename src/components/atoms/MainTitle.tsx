/* @jsx jsx */
import React, { FC } from "react";
import { css, jsx } from "@emotion/core";

const styles = css`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

interface MainTitleProps {
  text: string;
}

const MainTitle: FC<MainTitleProps> = ({ text }) => (
  <h1 css={styles}>{text}</h1>
);

export default MainTitle;
