/* @jsx jsx */
import React, { FC } from "react";
import { css, jsx } from "@emotion/core";

const styles = css`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

interface SubTitleProps {
  text: string;
}

const SubTitle: FC<SubTitleProps> = ({ text }) => <h2 css={styles}>{text}</h2>;

export default SubTitle;
