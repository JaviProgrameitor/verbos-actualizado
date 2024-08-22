
import Reloj from "../Reloj/Reloj";

function TableroReloj(props) {
  const { temporizadorSeleccionado, temporizador, setTemporizador, setEstado, respuestaUsuario } = props

  return (
    <div 
      className="flex items-center justify-center relative"
    >
      {
        temporizadorSeleccionado != 0 && (
          <Reloj 
            temporizador={temporizador}
            setTemporizador={setTemporizador}
            respuestaUsuario={respuestaUsuario}
          />
        )
      }
      <svg 
        className='fill-red-600 w-12 absolute right-0 cursor-pointer md:w-14'
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
        onClick={setEstado}
      >
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.207 12.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z">

        </path>
      </svg>
    </div>
  )
}

export default TableroReloj