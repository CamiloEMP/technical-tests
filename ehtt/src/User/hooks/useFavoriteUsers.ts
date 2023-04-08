import type { User } from '../models/user.model'

import { useEffect, useState } from 'react'

import { usePagination } from '@/hooks/usePagination'

import { useUsers } from '../context/UsersContext'
import { INITIAL_PAGE, USERS_PER_PAGE } from '../constants'

export function useFavoriteUsers() {
  const { initialUsers, updateFavorite } = useUsers()
  const [users, setUsers] = useState<User[]>([])

  const { dataPaginated, next, page, prev } = usePagination<User>({
    dataPerPage: USERS_PER_PAGE,
    initialPage: INITIAL_PAGE,
    data: users,
  })

  useEffect(() => {
    if (initialUsers.length === 0) return
    setUsers(initialUsers.filter(user => user.favorite))
  }, [initialUsers])

  return {
    favoriteUsers: dataPaginated,
    updateFavorite,
    page,
    next,
    prev,
  }
}
