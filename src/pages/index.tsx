import { FC, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { styles } from './Styled'

import ListContents from '../components/molecules/ListContents'
import GlobalMenus from '../components/molecules/GlobalMenus'

import MainTitle from '../components/atoms/MainTitle'
import SubTitle from '../components/atoms/SubTitle'

import { useInView, InView } from 'react-intersection-observer'

// Redux関連
import { useSelector, useDispatch } from 'react-redux'
// import { NewNoteProvider } from "../context/NewNote";
// import { NewNote } from "../components/organisms/NewNote";
// import CounterBox from "../components/useContext_Sample";

import { CounterProvider } from '../contexts/Counter'
import { Counter } from '../components/organisms/Counter'

const ruleText = [
  'なるべくTypescriptで記述する',
  'コンポーネント設計はAtomicDesignを踏襲',
  '色やフォントサイズなどは共通化',
]

const doneText = [
  '2020-06',
  'emotion・TypeScriptの導入',
  'Next.jsで別ページに遷移できるようにする',
]

const todoText = [
  'use●●を使ってみる',
  'hooks参考記事：https://qiita.com/YutamaKotaro/items/ef0430f570779dcf8a26',
  'Reduxサンプル作ってみる',
]

const reviewText = ['20200701：●●を修正']

const index: FC = () => {
  // const [ref, inView] = useInView({
  //   rootMargin: "-50px 0px",
  // });

  const [ref, inView] = useInView({
    rootMargin: '10px',
    threshold: 0,
  })

  return (
    <Fragment>
      <Head>
        <title key="title">トップ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        <a href="/" css={styles.title}>
          Portfolio
        </a>
      </h1>

      {/* グローバルメニュー */}
      <GlobalMenus />

      <main>
        <div css={styles.contentsBox}>
          <MainTitle text={'トップページ'} />

          <SubTitle text={'作成ルール　メモ'} />
          <ListContents listContents={ruleText} />

          {/* <span
            className="nit__marker yellow show"
            css={[styles.yellow, styles.show]}
          >
            審査時間は最短30分のため、どんなに遅くても20:30までには審査申込をする必要があります。
          </span> */}

          <SubTitle text={'レビュー内容'} />
          <ListContents listContents={reviewText} />

          <SubTitle text={'完了タスク'} />
          <ListContents listContents={doneText} />

          <SubTitle text={'次のタスク'} />
          <ListContents listContents={todoText} />
        </div>

        {/* Redux　メモアプリ */}
        <div css={styles.contentWrap}>
          <h2>Reduxの練習_0831(月)</h2>
          {/* <NewNote addNote={onAddNote} /> */}
          {/* <ul>
            {notes.map((note) => {
              return <li key={note}>{note}</li>;
            })}
          </ul> */}

          {/* Reduxサンプル CounterBox */}
          {/* <CounterProvider>
            <Counter />
          </CounterProvider> */}
        </div>

        <div css={styles.reduxBox}>
          <Link href="/about">
            <a>About Page</a>
          </Link>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <p ref={ref} css={[styles.yellow, inView && styles.show]}>
          テキストテキスト
        </p>

        {/* <div ref={ref}>
          <h2>{`Header inside viewport ${inView}.`}</h2>
        </div> */}

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
      {/* </NewNoteProvider> */}
    </Fragment>
  )
}

export default index
