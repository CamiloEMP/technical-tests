import type { OrderHappiness } from '../context/UsersContext'
import type { User } from '../models/user.model'

export function orderUsersByLevelOfHappiness(users: User[], orderBy: OrderHappiness) {
  const draft = structuredClone(users) as User[]

  const updatedUsers = draft.sort((a, b) => {
    const firstLevel = Number(a.levelOfHappiness)
    const secondLevel = Number(b.levelOfHappiness)

    if (orderBy === 'asc') {
      return firstLevel - secondLevel
    }

    return secondLevel - firstLevel
  })

  return updatedUsers
}
