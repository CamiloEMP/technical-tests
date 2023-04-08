interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export function Modal({ isOpen, onClose, children, className }: ModalProps) {
  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen overflow-hidden bg-black/60">
          <div className={`relative p-6 bg-white rounded ${className ?? ''}`}>
            <button className="absolute text-sm top-2 right-2" type="button" onClick={onClose}>
              Close
            </button>
            {children}
          </div>
        </div>
      ) : null}
    </>
  )
}
