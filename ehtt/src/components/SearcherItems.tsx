interface SearcherProps {
  search: string
  onSearch: (search: string) => void
}

export function SearcherItems({ search, onSearch }: SearcherProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    onSearch(value)
  }

  return (
    <section>
      <input
        className="px-2 py-1 text-sm font-medium border rounded outline-none border-neutral-300"
        type="text"
        value={search}
        onChange={handleSearch}
      />
    </section>
  )
}
