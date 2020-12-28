/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'

// グローバルCSS
const styles = css`
  /* ---------------------------------------------
reset
--------------------------------------------- */
  html {
    overflow-y: scroll;
    font: 62.5%/1.231 Noto Sans Japanese, メイリオ, Meiryo, 游ゴシック体,
      'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro',
      'Hiragino Kaku Gothic Pro', Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic',
      sans-serif;
  }

  body,
  div,
  dl,
  dt,
  dd {
    padding: 0;
    margin: 0;
    line-height: 1.7;
  }

  ul {
    padding: 0;
    margin: 0;
    line-height: 1.7;
  }

  li {
    padding: 0;
    margin: 0;
    line-height: 1.7;
    list-style-type: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  form,
  fieldset,
  input,
  textarea,
  p,
  blockquote,
  th,
  td,
  section,
  nav,
  article,
  aside,
  hgroup,
  header,
  address,
  figure,
  figcaption {
    padding: 0;
    margin: 0;
    line-height: 1.7;
  }

  address,
  caption,
  cite,
  code,
  dfn,
  em,
  strong,
  th,
  var {
    font-style: normal;
    font-weight: normal;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  caption,
  th {
    text-align: left;
  }

  q::before,
  q::after {
    content: '';
  }

  object,
  embed {
    vertical-align: top;
  }

  hr,
  legend {
    display: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  img,
  abbr,
  acronym,
  fieldset {
    border: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    line-height: 0;
    vertical-align: top;
    -ms-interpolation-mode: bicubic;
  }

  a,
  button,
  input,
  textarea {
    outline: none;
  }

  a {
    color: #171f6c;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  /* ---------------------------------------------
FontSize Initialization
--------------------------------------------- */
  body {
    font-size: 1rem;
    letter-spacing: -0.001em;
    background: #fff;
    -webkit-text-size-adjust: 100%;
  }

  select,
  input,
  button,
  textarea,
  table {
    font-size: 1rem;
  }

  /* ---------------------------------------------
Utility
--------------------------------------------- */

  /* Clearfix */
  .cf::after,
  .sec::after,
  .section::after {
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
    content: ' ';
  }

  .wrapper * {
    box-sizing: border-box;
  }

  .ReactModal__Content--after-open {
    animation: SlideIn 0.3s;
    @keyframes SlideIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
  }

  .ReactModal__Content--before-close {
    animation: SlideOut 0.3s;
    @keyframes SlideOut {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(100%);
      }
    }
  }
`

export const GlobalStyle = () => <Global styles={styles} />
