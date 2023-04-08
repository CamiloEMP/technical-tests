import { useEffect, useState } from 'react'

import { INITIAL_PAGE, USERS_PER_PAGE } from '../constants'
import { useUsers } from '../context/UsersContext'
import { filterUsersBySearch } from '../utils/filterUsersBySearch'

export function useFilteredUsers() {
  const { initialUsers, loading, updateFavorite } = useUsers()
  const [users, setUsers] = useState(() => initialUsers)

  const [page, setPage] = useState(INITIAL_PAGE)
  const [search, setSearch] = useState('')

  const usersPaginated = users.slice(page * USERS_PER_PAGE - USERS_PER_PAGE, page * USERS_PER_PAGE)

  const fetchNext = () => {
    setPage(currentPage => Math.min(currentPage + 1, Math.ceil(users.length / USERS_PER_PAGE)))
  }

  const fetchPrevious = () => {
    setPage(Math.max(page - 1, INITIAL_PAGE))
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
