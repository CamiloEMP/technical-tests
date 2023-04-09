import { useState } from 'react'

import { Modal } from './components/Modal'
import { UserSection } from './User/UserSection'
import { ListUsers } from './User/components/ListUsers'
import { useFavoriteUsers } from './User/hooks/useFavoriteUsers'
import { ButtonPagination } from './components/ButtonPagination'

function App() {
  const [favModal, setFavModal] = useState(false)
  const { favoriteUsers, next, page, prev, handleLevelOfHappiness } = useFavoriteUsers()

  const handleFavModal = () => {
    setFavModal(!favModal)
  }

  return (
    <div className="text-xl">
      <button type="button" onClick={handleFavModal}>
        Favoritos
      </button>
      <UserSection />
      <Modal className="max-w-screen-2xl" isOpen={favModal} onClose={handleFavModal}>
        <ButtonPagination isLoading={false} next={next} page={page} prev={prev} />
        <ListUsers handleLevelOfHappiness={handleLevelOfHappiness} users={favoriteUsers} />
      </Modal>
    </div>
  )
}

export default App
