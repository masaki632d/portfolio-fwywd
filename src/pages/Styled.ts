import { css } from "@emotion/core";

export const styles = {
  title: css`
    color: #333;
    font-size: 1rem;
    padding: 0 15px;
    text-decoration: none;
    transition: all 0.25s ease-in-out 0s;
    :hover {
      opacity: 0.7;
    }
  `,
  contentsBox: css`
    width: 960px;
    background-color: #f1f1f1;
    padding: 30px;
    margin: 0 auto;
  `,
  contentWrap: css`
    width: 960px;
    padding: 30px;
    margin: 0 auto;
  `,
  reduxBox: css`
    background-color: #ccc;
    margin-top: 20px;
    padding: 30px;
    h2 {
      margin-bottom: 20px;
    }
  `,

  // スクロールで表示と同時に黄色マーカー
  yellow: css`
    width: 200px;
    margin: 0 auto;
    text-align: center;
    opacity: 0;
    transition: 2s;

    background: -webkit-linear-gradient(
      left,
      rgb(255, 250, 153) 50%,
      transparent 50%
    );
    background-repeat: no-repeat;
    background-size: 200% 0.8em;
    background-position: 100% 0.5em;
  `,

  show: css`
    opacity: 1;
    background-position: 0% 0.5em;
    animation: SlideIn 3s ease-out both;

    transform: translateY(-10px);
  `,
};
