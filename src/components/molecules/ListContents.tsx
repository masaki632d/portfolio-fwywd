import React, { FC } from 'react'
import { css } from '@emotion/react'

const styles = {
  box: css`
    list-style: disc;
    margin-bottom: 2rem;
    padding-left: 1.5rem;
  `,
}

interface ListContentsProps {
  listContents: any
}

const ListContents: FC<ListContentsProps> = ({ listContents }) => (
  <ul css={styles.box}>
    {listContents.map((listContent) => (
      <li key={listContent}>{listContent}</li>
    ))}
  </ul>
)

export default ListContents
