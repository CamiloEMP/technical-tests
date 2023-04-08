import type { User } from '../models/user.model'

export function filterUsersBySearch(data: User[], search: string) {
  const draft = structuredClone(data) as User[]

  return draft.filter(
    user =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.category.toLowerCase().includes(search.toLowerCase()),
  )
}
