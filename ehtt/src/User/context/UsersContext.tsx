import type { User } from '../models/user.model'

import { createContext, useContext, useEffect, useState } from 'react'

import { getUsers } from '../services/get-users'

export interface ContextUsersProps {
  loading: boolean
  initialUsers: User[]
  updateFavorite: (id: string) => void
}

export const UsersContext = createContext({} as ContextUsersProps)

export function UsersProvider({ children }: { children: React.ReactNode }) {
  const [initialUsers, setInitialUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)

  const updateFavorite = (id: string) => {
    const updatedUsers = initialUsers.map(user => {
      if (id === user.id) {
        return { ...user, favorite: !user.favorite }
      }

      return user
    })

    setInitialUsers(updatedUsers)
  }

  useEffect(() => {
    setLoading(true)
    getUsers()
      .then(data => {
        setInitialUsers(data.users)
      })
      .catch(() => {
        throw new Error('No fue posible traer los usuarios')
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <UsersContext.Provider value={{ initialUsers, loading, updateFavorite }}>
      {children}
    </UsersContext.Provider>
  )
}

export function useUsers() {
  return useContext(UsersContext)
}
