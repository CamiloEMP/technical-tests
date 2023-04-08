import type { User } from '../models/user.model'

export function updateFavoriteUser(users: User[], id: string) {
  const updatedUsers = users.map(user => {
    if (id === user.id) {
      return { ...user, favorite: !user.favorite }
    }

    return user
  })

  return updatedUsers
}
