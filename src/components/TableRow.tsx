import TableCell from "./TableCell";

type Props = {
  row: any;
  index: number;
};

export default function TableRow({ row, index }: Props) {
  return (
    <tr className={`${index % 2 == 0 ? "bg-blue-300" : "bg-green-300"}`}>
      {row.getVisibleCells().map((cell: any) => (
        <TableCell key={cell.id} cell={cell} />
      ))}
    </tr>
  );
}
