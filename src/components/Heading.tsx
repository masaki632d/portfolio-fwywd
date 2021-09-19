import { FC } from 'react'

export interface HeadingProps {
  id?: string
  level: 1 | 2 | 3 | 4 | 5 | 6
  style?: any
}

export const Heading: FC<HeadingProps> = ({ id, level, style, children }) => {
  const TAG: any = `h${level}`

  return (
    <TAG css={style} id={id}>
      {children}
    </TAG>
  )
}
