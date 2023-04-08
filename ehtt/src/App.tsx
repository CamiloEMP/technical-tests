import { ListUsers } from '@/User/components/ListUsers'
import { useUsers } from '@/User/hooks/useUsers'

import { SearcherItems } from './components/SearcherItems'
import { ButtonPagination } from './components/ButtonPagination'

function App() {
  const { users, fetchNext, fetchPrevious, page, loading, updateFavorite, onSearch, search } =
    useUsers()

  return (
    <div className="text-xl">
      <section className="max-w-screen-xl mx-auto">
        <ButtonPagination isLoading={loading} next={fetchNext} page={page} prev={fetchPrevious} />
        <SearcherItems search={search} onSearch={onSearch} />
        {loading ? <p>Loading...</p> : <ListUsers updateFavorite={updateFavorite} users={users} />}
      </section>
    </div>
  )
}

export default App
