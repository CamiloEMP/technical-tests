import type { ReactNode } from 'react'

/* eslint-disable react/no-array-index-key */
interface TableProps {
  headers: ReactNode[]
  body: ReactNode[][]
}

export function Table({ headers, body }: TableProps) {
  return (
    <section className="relative overflow-x-auto shadow-md">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {headers.map((header, headerIndex) => (
              <th key={headerIndex} className="px-6 py-3" scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-white border-b">
              {row.map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap"
                >
                  {column}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
