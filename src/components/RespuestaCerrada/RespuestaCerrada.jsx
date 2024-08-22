
import CajasRespuestas from "../CajasRespuestas/CajasRespuestas"

function RespuestaCerrada(props) {
  const { verboCorrecto, opcionesRespuestas, respuestaUsuario, setRespuestaUsuario } = props

  let coloresRespuestas = [
    'bg-pink-300',
    'bg-[#F5B64A]',
    'bg-orange-300',
    'bg-blue-400'
  ]

  return (
    <div className="grid grid-cols-1 grid-rows-4 gap-1 md:grid-cols-2 md:grid-rows-2">
      {
        opcionesRespuestas.map((respuesta, index) =>
          <CajasRespuestas
            respuesta={respuesta}
            respuestaCorrecta={verboCorrecto}
            respuestaUsuario={respuestaUsuario}
            setRespuestaUsuario={setRespuestaUsuario}
            color={coloresRespuestas[index]}
            key={index}
          />
        )
      }
    </div>
  )
}

export default RespuestaCerrada