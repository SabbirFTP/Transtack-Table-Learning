export type User = {
  id: number
  name: string
  email: string
  role: string
  status: 'Active' | 'Inactive'
}

export const users: User[] = [
  {
    id: 1,
    name: 'Sabbir Morshed',
    email: 'sabbir@fintech-point.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Editor',
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Sarah Khan',
    email: 'sarah@gmail.com',
    role: 'User',
    status: 'Active',
  },
]
