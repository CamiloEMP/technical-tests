import { ButtonPagination } from '@/components/ButtonPagination'
import { SearcherItems } from '@/components/SearcherItems'
import { ListUsers } from '@/User/components/ListUsers'
import { useFilteredUsers } from '@/User/hooks/useFilteredUsers'

export function TableUsers() {
  const { users, next, prev, page, loading, onSearch, search, handleLevelOfHappiness } =
    useFilteredUsers()

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4">
        <ButtonPagination isLoading={loading} next={next} page={page} prev={prev} />
        <SearcherItems search={search} onSearch={onSearch} />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ListUsers handleLevelOfHappiness={handleLevelOfHappiness} users={users} />
      )}
    </section>
  )
}
