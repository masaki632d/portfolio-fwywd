/* @jsx jsx */
import React, { FC } from "react";
import { css, jsx } from "@emotion/core";
import SubTitle from "../atoms/SubTitle";

const contentsBox = css`
  margin: 0 20px 30px;
`;

const textStyles = {
  box: css`
    margin-bottom: 2rem;
  `,
  time: css`
    font-weight: 600;
    margin-bottom: 0.75rem;
  `,
  text: css`
    margin-bottom: 1rem;
  `,
};

const embedContent = css`
  width: 70%;
  height: auto;
  margin: 0 auto 20px;
  @media (max-width: 639px) {
    width: 95%;
  }
`;

interface EmbedContentsProps {
  textContents: any;
}

const EmbedContents: FC<EmbedContentsProps> = ({ textContents }) => (
  <div css={contentsBox}>
    {textContents.map((textContent, index) => {
      return (
        <div key={index} css={textStyles.box}>
          {textContent.subTitle && <SubTitle text={textContent.subTitle} />}
          {textContent.text1 && (
            <p
              css={textStyles.time}
              dangerouslySetInnerHTML={{ __html: textContent.text1 }}
            />
          )}
          {textContent.text2 && (
            <p
              css={textStyles.text}
              dangerouslySetInnerHTML={{ __html: textContent.text2 }}
            />
          )}
          {textContent.dataId && (
            <div css={embedContent}>
              <script
                async
                className="speakerdeck-embed"
                data-id={textContent.dataId}
                data-ratio={textContent.dataRatio}
                src="//speakerdeck.com/assets/embed.js"
              ></script>
            </div>
          )}
        </div>
      );
    })}
  </div>
);

export default EmbedContents;
