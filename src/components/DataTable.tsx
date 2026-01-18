import {
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import TableHeader from './TableHeader'
import TableRow from './TableRow'

type Props<T> = {
  data: T[]
  columns: any
}

export default function DataTable<T>({
  data,
  columns,
}: Props<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg">
        <thead>
          {table.getHeaderGroups().map((hg) => (
            <TableHeader key={hg.id} headerGroup={hg} />
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
