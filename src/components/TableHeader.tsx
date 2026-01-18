import { flexRender } from '@tanstack/react-table'

type Props = {
  headerGroup: any
}

export default function TableHeader({ headerGroup }: Props) {
  return (
    <tr>
      {headerGroup.headers.map((header: any) => (
        <th
          key={header.id}
          className="px-4 py-3 border bg-gray-100 text-left"
        >
          {flexRender(
            header.column.columnDef.header,
            header.getContext()
          )}
        </th>
      ))}
    </tr>
  )
}
