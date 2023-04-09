import { ListUsers } from '@/User/components/ListUsers'
import { useFavoriteUsers } from '@/User/hooks/useFavoriteUsers'
import { ButtonPagination } from '@/components/ButtonPagination'

export function FavoriteUsers() {
  const { favoriteUsers, next, page, prev, handleLevelOfHappiness } = useFavoriteUsers()

  if (favoriteUsers.length === 0) {
    return <p className="text-xl font-semibold">No tienes personas favoritas agregadas</p>
  }

  return (
    <section className="space-y-4">
      <h1 className="text-lg font-semibold text-center uppercase">
        Persona favoritas {favoriteUsers.length}
      </h1>
      <div className="flex items-start">
        <ButtonPagination isLoading={false} next={next} page={page} prev={prev} />
      </div>
      <ListUsers handleLevelOfHappiness={handleLevelOfHappiness} users={favoriteUsers} />
    </section>
  )
}
