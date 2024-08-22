
import RespuestaCerrada from "../RespuestaCerrada/RespuestaCerrada"
import RespuestaAbierta from "../RespuestaAbierta/RespuestaAbierta"

function TableroRespuestas(props) {
  const { verboCorrecto, opcionesRespuestas, respuestaUsuario, setRespuestaUsuario, tipoRespuestaSeleccionada } = props

  return (
    <>
      {
        tipoRespuestaSeleccionada == 'Cerrada' && (
          <RespuestaCerrada
            opcionesRespuestas={opcionesRespuestas}
            verboCorrecto={verboCorrecto}
            respuestaUsuario={respuestaUsuario}
            setRespuestaUsuario={setRespuestaUsuario}
          />
        )
      }
      {
        tipoRespuestaSeleccionada == 'Abierta' && (
          <RespuestaAbierta
            verboCorrecto={verboCorrecto}
            respuestaUsuario={respuestaUsuario}
            setRespuestaUsuario={setRespuestaUsuario}
          />
        )
      }
    </>
  )
}

export default TableroRespuestas