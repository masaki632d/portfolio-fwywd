import React, { FC } from 'react'
import { css } from '@emotion/react'

const styles = css`
  background-color: #f7fafc;
`

interface TableContentProps {
  tableContent: any
}

const TableContent: FC<TableContentProps> = ({ tableContent }) => (
  <tr css={styles} className="border-b border-gray-200">
    <td className="p-3 text-center">{tableContent.td1}</td>
    <td className="p-3 text-left">{tableContent.td2}</td>
  </tr>
)

export default TableContent
