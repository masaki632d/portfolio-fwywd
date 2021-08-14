import React, { FC } from 'react'
import { css } from '@emotion/react'

const styles = css`
  margin: 0.5rem 0.8rem;
  padding: 0.5rem 1.5rem;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  background-color: #3da9fc;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  &:hover {
    box-shadow: 0 5px 15px -10px rgba(31, 18, 53, 0.6);
    transform: translate(0px, -3px);
    transition: all 0.3s ease;
  }
`

interface BasicButtonProps {
  text: string
  href: string
  target: string
}

export const BasicButton: FC<BasicButtonProps> = ({ text, href, target }) => (
  <a css={styles} href={href} target={target}>
    {text}
  </a>
)

export default BasicButton
