interface SearcherProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function SearcherItems({ search, setSearch }: SearcherProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setSearch(e.target.value)
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
