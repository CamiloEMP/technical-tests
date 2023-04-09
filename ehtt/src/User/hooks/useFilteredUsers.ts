import type { User } from '../models/user.model'

import { useEffect, useState } from 'react'

import { usePagination } from '@/hooks/usePagination'

import { INITIAL_PAGE, USERS_PER_PAGE } from '../constants'
import { useUsers } from '../context/UsersContext'
import { filterUsersBySearch } from '../utils/filterUsersBySearch'

export function useFilteredUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState('')

  const { initialUsers, loading, handleLevelOfHappiness } = useUsers()
  const {
    next,
    prev,
    page,
    resetPage,
    dataPaginated: usersPaginated,
  } = usePagination<User>({
    dataPerPage: USERS_PER_PAGE,
    initialPage: INITIAL_PAGE,
    data: users,
  })

  const onSearch = (value: string) => {
    resetPage()
    setSearch(value)

    if (value === '') {
      setUsers(initialUsers)

      return
    }

    setUsers(filterUsersBySearch(initialUsers, value))
  }

  const handleHappiness = () => {
    if (search === '') resetPage()

    const usersOrdered = handleLevelOfHappiness(users)

    setUsers(usersOrdered)
  }

  useEffect(() => {
    if (initialUsers.length === 0) return
    setUsers(initialUsers)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialUsers])

  return {
    users: usersPaginated,
    loading,
    search,
    page,
    next,
    prev,
    onSearch,
    handleLevelOfHappiness: handleHappiness,
  }
}
