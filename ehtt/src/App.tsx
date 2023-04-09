import { useState } from 'react'

import { FavoriteUsers } from '@/User/sections/FavoriteUsers'
import { TableUsers } from '@/User/sections/TableUsers'
import { Modal } from '@/components/Modal'

function App() {
  const [favModal, setFavModal] = useState(false)

  const handleFavModal = () => {
    setFavModal(!favModal)
  }

  return (
    <>
      <div className="text-xl">
        <button type="button" onClick={handleFavModal}>
          Favoritos
        </button>
        <TableUsers />
      </div>
      <Modal className="max-w-screen-2xl" isOpen={favModal} onClose={handleFavModal}>
        <FavoriteUsers />
      </Modal>
    </>
  )
}

export default App
