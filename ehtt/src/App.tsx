import { ListUsers } from '@/User/components/ListUsers'
import { useUsers } from '@/User/hooks/useUsers'

function App() {
  const { users, fetchNext, fetchPrevious, page, loading } = useUsers()

  return (
    <div className="text-xl">
      <section className="max-w-screen-xl mx-auto">
        <button type="button" onClick={fetchNext}>
          Next
        </button>
        <button type="button" onClick={fetchPrevious}>
          Prev
        </button>
        {page}
        {loading ? <p>Loading...</p> : <ListUsers users={users} />}
      </section>
    </div>
  )
}

export default App
