import type { User } from '../models/user.model'

import { useEffect, useState } from 'react'

import { usePagination } from '@/hooks/usePagination'

import { INITIAL_PAGE, USERS_PER_PAGE } from '../constants'
import { useUsers } from '../context/UsersContext'
import { filterUsersBySearch } from '../utils/filterUsersBySearch'

export function useFilteredUsers() {
  const { initialUsers, loading, updateFavorite } = useUsers()
  const { fetchNext, fetchPrevious, page, resetPage } = usePagination({
    dataPerPage: USERS_PER_PAGE,
    initialPage: INITIAL_PAGE,
    totalData: initialUsers.length,
  })

  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState('')

  const usersPaginated = users.slice(page * USERS_PER_PAGE - USERS_PER_PAGE, page * USERS_PER_PAGE)

  const onSearch = (value: string) => {
    resetPage()
    setSearch(value)

    if (value === '') {
      setUsers(initialUsers)

      return
    }

    setUsers(filterUsersBySearch(initialUsers, value))
  }

  useEffect(() => {
    if (initialUsers.length === 0) return
    setUsers(initialUsers)
  }, [initialUsers])

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
