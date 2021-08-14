import React, { FC } from 'react'
import SubTitle from '../atoms/SubTitle'
import { css } from '@emotion/react'

const styles = {
  contentsBox: css`
    margin: 0 20px 30px;
  `,
  box: css`
    margin-bottom: 25px;
  `,
  title: css`
    font-weight: 600;
    margin-bottom: 1px;
  `,
  text: css`
    margin-bottom: 15px;
  `,
}

interface DefinitionContentsProps {
  dlContents: any
}

const DefinitionContents: FC<DefinitionContentsProps> = ({ dlContents }) => {
  let image_url = ''

  return dlContents.map((dlContent, index) => {
    image_url = `/images/production/${dlContent.image}`

    return (
      <div key={index} css={styles.contentsBox}>
        <SubTitle text={dlContent.subTitle} />
        <dl css={styles.box}>
          <dt
            css={styles.title}
            dangerouslySetInnerHTML={{ __html: dlContent.dt1 }}
          />
          <dd
            css={styles.text}
            dangerouslySetInnerHTML={{ __html: dlContent.dd1 }}
          />
          <dt
            css={styles.title}
            dangerouslySetInnerHTML={{ __html: dlContent.dt2 }}
          />
          <dd
            css={styles.text}
            dangerouslySetInnerHTML={{ __html: dlContent.dd2 }}
          />
          <dt
            css={styles.title}
            dangerouslySetInnerHTML={{ __html: dlContent.dt3 }}
          />
          <dd
            css={styles.text}
            dangerouslySetInnerHTML={{ __html: dlContent.dd3 }}
          />
          {dlContent.image && <img src={image_url} />}
        </dl>
      </div>
    )
  })
}

export default DefinitionContents
