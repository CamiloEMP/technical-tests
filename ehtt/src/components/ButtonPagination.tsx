interface PageProps {
  page: number
  next: () => void
  prev: () => void
  isLoading: boolean
}

export function ButtonPagination({ next, page, prev, isLoading }: PageProps) {
  return (
    <div className="flex justify-center gap-2">
      <button
        className="p-1 text-sm text-white rounded bg-neutral-900 disabled:cursor-not-allowed disabled:bg-neutral-900/50"
        disabled={page === 1 || isLoading}
        type="button"
        onClick={prev}
      >
        Prev
      </button>
      <span>{page}</span>
      <button
        className="p-1 text-sm text-white rounded bg-neutral-900 disabled:cursor-not-allowed disabled:bg-neutral-900/50"
        disabled={isLoading}
        type="button"
        onClick={next}
      >
        Next
      </button>
    </div>
  )
}
