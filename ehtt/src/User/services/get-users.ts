import type { UserMock } from '../models/user.model'

import users_mock from '../mocks/users.json'
import { userAdapter } from '../adapters/user.adapter'
import { USERS_PER_PAGE } from '../constants'
import { filterUsersBySearch } from '../utils/filterUsersBySearch'

interface ServiceProps {
  page: number
  search: string
}

export async function getUsers({ page, search }: ServiceProps) {
  const data: UserMock[] = await new Promise(resolve => {
    setTimeout(() => {
      resolve(users_mock)
    }, 500)
  })

  let users = data.map(userAdapter)

  if (search.length > 0) {
    users = filterUsersBySearch(users, search)
  }

  const totalUsers = users.length
  const usersPaginated = users.slice(page * USERS_PER_PAGE - USERS_PER_PAGE, page * USERS_PER_PAGE)

  return { users: usersPaginated, totalUsers }
}
