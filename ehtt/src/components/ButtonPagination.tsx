import { LeftArrowIcon, RightArrowIcon } from './icons/ArrowIcons'

interface PageProps {
  page: number
  next: () => void
  prev: () => void
  isLoading: boolean
}

export function ButtonPagination({ next, page, prev, isLoading }: PageProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        className="py-0.5 px-1 text-white rounded bg-neutral-900 disabled:cursor-not-allowed disabled:bg-neutral-900/50"
        disabled={page === 1 || isLoading}
        type="button"
        onClick={prev}
      >
        <LeftArrowIcon className="w-5" />
      </button>
      <span>{page}</span>
      <button
        className="py-0.5 px-1 text-white rounded bg-neutral-900 disabled:cursor-not-allowed disabled:bg-neutral-900/50"
        disabled={isLoading}
        type="button"
        onClick={next}
      >
        <RightArrowIcon className="w-5" />
      </button>
    </div>
  )
}
