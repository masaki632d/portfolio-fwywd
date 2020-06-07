/* @jsx jsx */
import React, { FC } from "react";
import { css, jsx } from "@emotion/core";
import SubTitle from "../atoms/SubTitle";

const styles = {
  box: css`
    margin-bottom: 2rem;
  `,
  text: css`
    margin-bottom: 0.5rem;
  `,
};

interface TextContentsProps {
  textContents: any;
}

const TextContents: FC<TextContentsProps> = ({ textContents }) => {
  return textContents.map((textContent, index) => {
    return (
      <div key={index} css={styles.box}>
        {textContent.subTitle && <SubTitle text={textContent.subTitle} />}
        {textContent.text1 && (
          <p
            css={styles.text}
            dangerouslySetInnerHTML={{ __html: textContent.text1 }}
          />
        )}
        {textContent.text2 && (
          <p
            css={styles.text}
            dangerouslySetInnerHTML={{ __html: textContent.text2 }}
          />
        )}
        {textContent.text3 && (
          <p
            css={styles.text}
            dangerouslySetInnerHTML={{ __html: textContent.text3 }}
          />
        )}
        {textContent.text4 && (
          <p
            css={styles.text}
            dangerouslySetInnerHTML={{ __html: textContent.text4 }}
          />
        )}
      </div>
    );
  });
};

export default TextContents;
