import { useEffect } from "react"

function Reloj(props) {
  const { temporizador, setTemporizador, respuestaUsuario } = props

  useEffect(() => {
    if (temporizador > 0 && respuestaUsuario == null) {
      const interval = setInterval(() => {
        setTemporizador(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [temporizador])

  return (
    <div className="w-14 h-14 bg-gray-50 rounded-full flex justify-center items-center text-lg md:w-16 md:h-16">
      {temporizador}
    </div>
  )
}

export default Reloj