import { useEffect, useState } from "react"
import Modal from "../Modal/Modal"

function PantallaCarga({ estado, setEstado }) {
  const [ contador, setContador ] = useState(3)

  useEffect(() => {
    const tiempo = setInterval(() => {
      setContador(contador - 1)
    }, 1000)

    if(contador === 0) {
      clearInterval(tiempo)
      setEstado(!estado)
    }

    return () => clearInterval(tiempo)
  }, [contador])

  return (
    <>
      {
        estado && (
          <>
            <Modal 
              estado={estado}
            />
            <div className="translate-x-[-50%] translate-y-[-50%] fixed top-[50%] left-[50%] z-50 text-white w-2/3 space-y-3">
              <div className="bg-blue-500 w-8 h-8 rounded-full"></div>
              <p className="text-center text-2xl text-red-500 font-bold">
                El juego comienza en <span className="text-white">{contador}</span> segundos
              </p>
            </div>
          </>
        )
      }
    </>
  )
}

export default PantallaCarga