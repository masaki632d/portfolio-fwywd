import React, { FC } from 'react'
import { css } from '@emotion/react'

import TextContents from '../molecules/TextContents'
import MainTitle from '../atoms/MainTitle'

const styles = css`
  margin-bottom: 3rem;
`

interface TextContentsAriaProps {
  title: string
  textContents: any
}

const TextContentsAria: FC<TextContentsAriaProps> = ({
  title,
  textContents,
}) => (
  <section css={styles}>
    <MainTitle text={title} />
    <TextContents textContents={textContents} />
  </section>
)

export default TextContentsAria
