import { ButtonPagination } from '@/components/ButtonPagination'
import { SearcherItems } from '@/components/SearcherItems'

import { ListUsers } from './components/ListUsers'
import { useFilteredUsers } from './hooks/useFilteredUsers'

export function UserSection() {
  const { users, next, prev, page, loading, onSearch, search, handleLevelOfHappiness } =
    useFilteredUsers()

  return (
    <section className="max-w-screen-xl mx-auto">
      <ButtonPagination isLoading={loading} next={next} page={page} prev={prev} />
      <SearcherItems search={search} onSearch={onSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ListUsers handleLevelOfHappiness={handleLevelOfHappiness} users={users} />
      )}
    </section>
  )
}
