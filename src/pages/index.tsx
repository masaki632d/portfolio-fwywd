/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../../styles/utils.module.css";

// emotionの備忘録
const contentsBox = css`
  background: red;
`;

const styles = {
  blue: css`
    background-color: #f1f1f1;
  `,
};

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title key="title">{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}

// styled-jsxの備忘録
{
  /* <style jsx>{`
  .container {
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`}</style>; */
}

{
  /* styled-jsx globalの備忘録 */
}
{
  /* <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`}</style>; */
}
