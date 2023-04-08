import { ButtonPagination } from '@/components/ButtonPagination'
import { SearcherItems } from '@/components/SearcherItems'

import { ListUsers } from './components/ListUsers'
import { useUsers } from './hooks/useUsers'

export function UserSection() {
  const { users, fetchNext, fetchPrevious, page, loading, updateFavorite, onSearch, search } =
    useUsers()

  return (
    <section className="max-w-screen-xl mx-auto">
      <ButtonPagination isLoading={loading} next={fetchNext} page={page} prev={fetchPrevious} />
      <SearcherItems search={search} onSearch={onSearch} />
      {loading ? <p>Loading...</p> : <ListUsers updateFavorite={updateFavorite} users={users} />}
    </section>
  )
}
