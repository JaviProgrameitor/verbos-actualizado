import { useEffect, useState } from "react"

function RespuestaAbierta(props) {
  const { verboCorrecto, respuestaUsuario, setRespuestaUsuario } = props

  const [ respuestaInput, setRespuestaInput ] = useState('')
  const [ paso, setPaso ] = useState(0)
  const [ resultadoRespuesta, setResultadoRespuesta ] = useState('')
  const [ respuestaFinal, setRespuestaFinal ] = useState('')

  function comprobarRespuesta() {
    setRespuestaUsuario(respuestaInput)
    verboCorrecto.toLowerCase() == respuestaInput.toLowerCase() 
      ? setResultadoRespuesta('Respuesta Correcta')
      : setResultadoRespuesta('Respuesta Incorrecta')
  }

  function resetearDatos() {
    setPaso(0)
    setRespuestaInput('')
    setResultadoRespuesta('')
  }

  useEffect(resetearDatos, [verboCorrecto])
  useEffect(() => {
    if(respuestaUsuario != null ) {
      setPaso(1)
      comprobarRespuesta()
    }
  }, [respuestaUsuario])

  return (
    <div className="flex justify-center items-center flex-col gap-3">
      {
        paso == 0 && (
          <>
            <input 
              className="w-4/5 p-4 rounded-md"
              type="text" 
              value={respuestaInput} 
              onChange={(e) => setRespuestaInput(e.target.value)} 
            />
            <button 
              className="py-3 px-4 bg-white rounded-md disabled:bg-gray-600 disabled:text-white"
              onClick={() => {
                setPaso(1)
                comprobarRespuesta()
              }}
            >
              Comprobar
            </button>
          </>
        )
      }
      {
        paso == 1 && resultadoRespuesta == 'Respuesta Correcta' && (
          <>
            <span className="text-green-700 text-center font-medium text-2xl md:text-4xl">{resultadoRespuesta}</span>
          </>
        )
      }
      {
        paso == 1 && resultadoRespuesta == 'Respuesta Incorrecta' && (
          <>
            <span className="text-red-700 font-medium text-center text-2xl md:text-4xl">{resultadoRespuesta}</span>
            <p className="text-center text-2xl">La respuesta correcta es: {verboCorrecto}</p>
          </>
        )
      }
    </div>
  )
}

export default RespuestaAbierta