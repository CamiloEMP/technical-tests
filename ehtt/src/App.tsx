import { useState } from 'react'

import { Modal } from './components/Modal'
import { UserSection } from './User/UserSection'

function App() {
  const [favModal, setFavModal] = useState(false)

  const handleFavModal = () => {
    setFavModal(!favModal)
  }

  return (
    <div className="text-xl">
      <button type="button" onClick={handleFavModal}>
        Favoritos
      </button>
      <UserSection />
      <Modal isOpen={favModal} onClose={handleFavModal}>
        <span>holaaa</span>
      </Modal>
    </div>
  )
}

export default App
