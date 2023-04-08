import type { UserMock } from '../models/user.model'

import users_mock from '../mocks/users.json'
import { userAdapter } from '../adapters/user.adapter'
import { USERS_PER_PAGE } from '../constants'

export async function getUsers(page: number) {
  const data: UserMock[] = await new Promise(resolve => {
    setTimeout(() => {
      resolve(users_mock)
    }, 500)
  })

  const totalUsers = data.length
  const usersPaginated = data.slice(page * USERS_PER_PAGE - USERS_PER_PAGE, page * USERS_PER_PAGE)

  const users = usersPaginated.map(userAdapter)

  return { users, totalUsers }
}
