interface Props {
  headers: string[]
  body: React.ReactNode[][]
}

export function Table ({headers, body}: Props) {
  return (
    <section className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {headers.map(header => (
              <th scope="col" className="px-6 py-3" key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, rowIndex) => (
            <tr className="bg-white border-b" key={rowIndex}>
              {row.map((column, columnIndex) => (
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" key={columnIndex}>{column}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
