import type { User } from '../models/user.model'

import { createContext, useContext, useEffect, useState } from 'react'

import { getUsers } from '../services/get-users'
import { orderUsersByLevelOfHappiness } from '../utils/orderUsersByLevelOfHappiness'
import { updateFavoriteUser } from '../utils/updateFavoriteUser'
import { INITIAL_ORDER_HAPPINESS } from '../constants'

export type OrderHappiness = 'asc' | 'desc'

export interface ContextUsersProps {
  loading: boolean
  initialUsers: User[]
  updateFavorite: (id: string) => void
  handleLevelOfHappiness: () => void
  orderHappiness: OrderHappiness
}

export const UsersContext = createContext({} as ContextUsersProps)

export function UsersProvider({ children }: { children: React.ReactNode }) {
  const [initialUsers, setInitialUsers] = useState<User[]>([])
  const [orderHappiness, setOrderHappiness] = useState<OrderHappiness>('desc')
  const [loading, setLoading] = useState(false)

  const updateFavorite = (id: string) => {
    const users = updateFavoriteUser(initialUsers, id)

    setInitialUsers(users)
  }

  const handleLevelOfHappiness = () => {
    setLoading(true)
    const orderBy = orderHappiness === 'asc' ? 'desc' : 'asc'

    setOrderHappiness(orderBy)

    const users = orderUsersByLevelOfHappiness(initialUsers, orderBy)

    setInitialUsers(users)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    getUsers()
      .then(users => {
        const usersOrdered = orderUsersByLevelOfHappiness(users, INITIAL_ORDER_HAPPINESS)

        setInitialUsers(usersOrdered)
      })
      .catch(() => {
        throw new Error('No fue posible traer los usuarios')
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <UsersContext.Provider
      value={{ initialUsers, loading, updateFavorite, handleLevelOfHappiness, orderHappiness }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export function useUsers() {
  return useContext(UsersContext)
}
