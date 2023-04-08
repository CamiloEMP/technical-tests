import type { User } from '../models/user.model'

import { useCallback, useEffect, useState } from 'react'

import { getUsers } from '../services/get-users'
import { USERS_PER_PAGE, INITIAL_PAGE } from '../constants'
import { filterUsersBySearch } from '../utils/filterUsersBySearch'

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [initialUsers, setInitialUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [search, setSearch] = useState('')

  const usersPaginated = users.slice(page * USERS_PER_PAGE - USERS_PER_PAGE, page * USERS_PER_PAGE)

  const fetchNext = () => {
    setPage(currentPage => Math.min(currentPage + 1, Math.ceil(users.length / USERS_PER_PAGE)))
  }

  const fetchPrevious = () => {
    setPage(Math.max(page - 1, INITIAL_PAGE))
  }

  const updateFavorite = (id: string) => {
    const updatedUsers = initialUsers.map(user => {
      if (id === user.id) {
        return { ...user, favorite: !user.favorite }
      }

      return user
    })

    setInitialUsers(updatedUsers)
    setUsers(updatedUsers)
  }

  const onSearch = (value: string) => {
    setPage(INITIAL_PAGE)
    setSearch(value)

    if (value === '') {
      setUsers(initialUsers)

      return
    }

    setUsers(filterUsersBySearch(initialUsers, value))
  }

  const fetchUsers = useCallback(() => {
    setLoading(true)
    getUsers()
      .then(data => {
        setInitialUsers(data.users)
        setUsers(data.users)
      })
      .catch(() => {
        throw new Error('No fue posible traer los usuarios')
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return {
    users: usersPaginated,
    search,
    page,
    loading,
    fetchNext,
    fetchPrevious,
    updateFavorite,
    onSearch,
  }
}
