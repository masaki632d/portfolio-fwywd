/* @jsx jsx */
import React, { FC } from "react";
import { css, jsx } from "@emotion/core";
import Document, { Html, Head, Main, NextScript } from "next/document";

const styles = {
  body: css`
    background-color: #fff;
  `,
  main: css`
    @media (min-width: 1024px) {
      width: 960px;
      margin: 0 auto;
    }
    @media (max-width: 640px) {
      width: 90%;
    }
  `,
  contentsBox: css`
    @media (min-width: 640px) {
      padding: 30px;
    }
  `,
  footer: css`
    text-align: center;
    margin-top: 40px;
  `,
};

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>幸村のポートフォリオ</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <body css={styles.body}>
          <div css={styles.main}>
            <div css={styles.contentsBox}>
              <Main />
              <NextScript />
            </div>
          </div>

          <footer css={styles.footer}>© 2020 Masahiro Koumura</footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
