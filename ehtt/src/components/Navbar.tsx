interface NavbarProps {
  handleFavModal: () => void
}

export function Navbar({ handleFavModal }: NavbarProps) {
  return (
    <header className="flex items-center justify-center gap-4 p-4 text-white rounded-b bg-neutral-800">
      <h1 className="text-lg font-semibold">EHTT</h1>
      <button type="button" onClick={handleFavModal}>
        Favoritos
      </button>
    </header>
  )
}
