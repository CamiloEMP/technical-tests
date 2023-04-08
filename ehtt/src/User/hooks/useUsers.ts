import type { User } from '../models/user.model'

import { useCallback, useEffect, useState } from 'react'

import { getUsers } from '../services/get-users'
import { USERS_PER_PAGE, INITIAL_PAGE } from '../constants'

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [totalUsers, setTotalUsers] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [search, setSearch] = useState('')

  const fetchNext = () => {
    setPage(currentPage => Math.min(currentPage + 1, Math.ceil(totalUsers / USERS_PER_PAGE)))
  }

  const fetchPrevious = () => {
    setPage(Math.max(page - 1, INITIAL_PAGE))
  }

  const fetchUsers = useCallback(() => {
    setLoading(true)
    getUsers({ page, search })
      .then(data => {
        setUsers(data.users)
        setTotalUsers(data.totalUsers)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [page, search])

  useEffect(() => {
    if (search.length > 0) {
      setPage(INITIAL_PAGE)
    }

    fetchUsers()
  }, [page, search, fetchUsers])

  return { users, fetchNext, fetchPrevious, page, loading, search, setSearch }
}
