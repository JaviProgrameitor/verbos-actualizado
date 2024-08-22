
function Modal({ estado } ) {
  return (
    <div 
      className={`fixed inset-0 bg-[rgb(0,0,0,.7)] z-10 ${!estado && 'hidden'}`}
    >
      
    </div>
  )
}

export default Modal