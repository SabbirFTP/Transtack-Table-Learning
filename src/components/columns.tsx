import type { ColumnDef } from '@tanstack/react-table'
import type { User } from '../utils/Data'

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded text-xs font-medium ${
          row.original.status === 'Active'
            ? 'bg-green-100 text-green-600'
            : 'bg-red-100 text-red-600'
        }`}
      >
        {row.original.status}
      </span>
    ),
  },
]
