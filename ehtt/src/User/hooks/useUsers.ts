import type { User } from '../models/user.model'

import { useEffect, useState } from 'react'

import { getUsers } from '../services/get-users'
import { USERS_PER_PAGE } from '../constants'

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [totalUsers, setTotalUsers] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const fetchNext = () => {
    setPage(currentPage => Math.min(currentPage + 1, Math.ceil(totalUsers / USERS_PER_PAGE)))
  }

  const fetchPrevious = () => {
    setPage(Math.max(page - 1, 1))
  }

  useEffect(() => {
    setLoading(true)
    getUsers(page)
      .then(data => {
        setUsers(data.users)
        setTotalUsers(data.totalUsers)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [page])

  return { users, fetchNext, fetchPrevious, page, loading }
}
