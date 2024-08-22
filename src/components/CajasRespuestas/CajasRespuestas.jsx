
function CajasRespuestas({ respuesta, respuestaCorrecta, color, respuestaUsuario, setRespuestaUsuario }) {

  function contestar() {
    setRespuestaUsuario(respuestaCorrecta)
  }

  return (
    <div 
      onClick={contestar}
      className={
        `box-border border-2 border-black grid place-items-center text-center cursor-pointer 
        text-xl rounded ${respuestaUsuario == null && color} md:text-3xl ${respuestaUsuario != null && respuesta == respuestaUsuario && 'bg-green-500'}
        ${respuestaUsuario != null && respuesta != respuestaUsuario && 'bg-red-500'}`
      }
    >
      {respuesta}
    </div>
  )
}

export default CajasRespuestas