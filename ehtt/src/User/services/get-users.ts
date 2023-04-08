import type { UserMock } from '../models/user.model'

import users_mock from '../mocks/users.json'
import { userAdapter } from '../adapters/user.adapter'

export async function getUsers() {
  const data: UserMock[] = await new Promise(resolve => {
    setTimeout(() => {
      resolve(users_mock)
    }, 500)
  })

  const users = data.map(userAdapter)

  return { users, totalUsers: users.length }
}
