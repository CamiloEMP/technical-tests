import { ListUsers } from '@/User/components/ListUsers'
import { useUsers } from '@/User/hooks/useUsers'

import { SearcherItems } from './components/SearcherItems'

function App() {
  const { users, fetchNext, fetchPrevious, page, loading, search, setSearch } = useUsers()

  return (
    <div className="text-xl">
      <section className="max-w-screen-xl mx-auto">
        <div>
          <button type="button" onClick={fetchNext}>
            Next
          </button>
          <span>{page}</span>
          <button type="button" onClick={fetchPrevious}>
            Prev
          </button>
        </div>
        <SearcherItems search={search} setSearch={setSearch} />
        {loading ? <p>Loading...</p> : <ListUsers users={users} />}
      </section>
    </div>
  )
}

export default App
