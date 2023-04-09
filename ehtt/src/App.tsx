import { useState } from 'react'

import { FavoriteUsers } from '@/User/sections/FavoriteUsers'
import { TableUsers } from '@/User/sections/TableUsers'
import { Modal } from '@/components/Modal'

import { Navbar } from './components/Navbar'

function App() {
  const [favModal, setFavModal] = useState(false)

  const handleFavModal = () => {
    setFavModal(!favModal)
  }

  return (
    <>
      <main className="max-w-screen-xl mx-auto space-y-6">
        <Navbar handleFavModal={handleFavModal} />
        <TableUsers />
      </main>
      <Modal className="p-12 max-w-screen-2xl" isOpen={favModal} onClose={handleFavModal}>
        <FavoriteUsers />
      </Modal>
    </>
  )
}

export default App
