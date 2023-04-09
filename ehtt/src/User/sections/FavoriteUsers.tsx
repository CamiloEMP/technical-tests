import { ListUsers } from '@/User/components/ListUsers'
import { useFavoriteUsers } from '@/User/hooks/useFavoriteUsers'
import { ButtonPagination } from '@/components/ButtonPagination'

export function FavoriteUsers() {
  const { favoriteUsers, next, page, prev, handleLevelOfHappiness } = useFavoriteUsers()

  return (
    <>
      <ButtonPagination isLoading={false} next={next} page={page} prev={prev} />
      <ListUsers handleLevelOfHappiness={handleLevelOfHappiness} users={favoriteUsers} />
    </>
  )
}
