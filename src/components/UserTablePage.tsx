
import { users } from '../utils/Data'
import { userColumns } from './columns'
import DataTable from './DataTable'

export default function UserTablePage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">
        User Management
      </h2>

      {/* You can loop multiple tables here */}
      {[1].map((item) => (
        <DataTable
          key={item}
          data={users}
          columns={userColumns}
        />
      ))}
    </div>
  )
}
