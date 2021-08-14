import React, { FC } from 'react'

import TableContent from '../atoms/TableContent'

interface TableContentsProps {
  tableContents: any
}

const TableContents = ({ tableContents }) => {
  return (
    <div className="mb-2">
      <table>
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-2/5 p-3 text-center font-semibold text-sm">
              DATE
            </th>
            <th className="w-3/5 p-3 text-center font-semibold text-sm">
              EXPERIENCE
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {tableContents.map((tableContent, index) => {
            return <TableContent key={index} tableContent={tableContent} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableContents
