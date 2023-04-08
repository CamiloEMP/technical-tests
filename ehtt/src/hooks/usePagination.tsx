import { useState } from 'react'

interface PaginationProps<T> {
  dataPerPage: number
  data: T[]
  initialPage: number
}

export function usePagination<T>({ initialPage, dataPerPage, data }: PaginationProps<T>) {
  const [page, setPage] = useState(initialPage)

  const next = () => {
    setPage(currentPage => Math.min(currentPage + 1, Math.ceil(data.length / dataPerPage)))
  }

  const prev = () => {
    setPage(Math.max(page - 1, initialPage))
  }

  const resetPage = () => {
    setPage(initialPage)
  }

  const dataPaginated = data.slice(page * dataPerPage - dataPerPage, page * dataPerPage)

  return { page, next, prev, resetPage, dataPaginated }
}
