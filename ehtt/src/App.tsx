import { ListUsers } from "@/User/components/ListUsers"
import { useUsers } from "@/User/hooks/useUsers"

function App() {
  const { users } = useUsers()
  return (
    <div className="text-xl">
      <section className="max-w-screen-xl mx-auto">
        <ListUsers users={users} />
      </section>
    </div>
  )
}

export default App
