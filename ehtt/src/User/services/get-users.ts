import users_mock from '@/User/mocks/users.json'
import { userAdapter } from '../adapters/user.adapter';

export async function getUsers () {
  const data = await new Promise(resolve => {
    setTimeout(() => {
      resolve(users_mock)
    }, 500);
  }) as any[]

  const users = data.map(userAdapter)

  return users
}
