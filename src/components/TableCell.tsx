import { flexRender } from '@tanstack/react-table'

type Props = {
  cell: any
}

export default function TableCell({ cell }: Props) {
  return (
    <td className="px-4 py-3 border">
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  )
}
