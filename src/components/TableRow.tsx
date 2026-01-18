import TableCell from './TableCell'

type Props = {
  row: any
}

export default function TableRow({ row }: Props) {
  return (
    <tr>
      {row.getVisibleCells().map((cell: any) => (
        <TableCell key={cell.id} cell={cell} />
      ))}
    </tr>
  )
}
