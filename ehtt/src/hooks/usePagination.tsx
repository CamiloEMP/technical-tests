import { useState } from 'react'

interface PaginationProps {
  initialPage: number
  totalData: number
  dataPerPage: number
}

export function usePagination({ initialPage, totalData, dataPerPage }: PaginationProps) {
  const [page, setPage] = useState(initialPage)

  const fetchNext = () => {
    setPage(currentPage => Math.min(currentPage + 1, Math.ceil(totalData / dataPerPage)))
  }

  const fetchPrevious = () => {
    setPage(Math.max(page - 1, initialPage))
  }

  const resetPage = () => {
    setPage(initialPage)
  }

  return { page, fetchNext, fetchPrevious, resetPage }
}
