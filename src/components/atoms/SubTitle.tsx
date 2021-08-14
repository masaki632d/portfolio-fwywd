import React, { FC } from 'react'
import { css } from '@emotion/react'

const styles = css`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

interface SubTitleProps {
  text: string
}

const SubTitle: FC<SubTitleProps> = ({ text }) => <h2 css={styles}>{text}</h2>

export default SubTitle
