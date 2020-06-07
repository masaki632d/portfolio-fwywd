/* @jsx jsx */
import React, { FC } from "react";
import { css, jsx } from "@emotion/core";

import TextContents from "../molecules/TextContents";
import MainTitle from "../atoms/MainTitle";

const styles = css`
  margin-bottom: 3rem;
`;

interface TextContentsAriaProps {
  title: string;
  textContents: any;
}

const TextContentsAria: FC<TextContentsAriaProps> = ({
  title,
  textContents,
}) => (
  <section css={styles}>
    <MainTitle text={title} />
    <TextContents textContents={textContents} />
  </section>
);

export default TextContentsAria;
