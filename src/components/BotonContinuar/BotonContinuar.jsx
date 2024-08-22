
function BotonContinuar(props) {
  const {
    verbosSeleccionadas,
    siguienteVerbo,
    respuestaUsuario,
    setRespuestaUsuario,
    reanudarTemporizador
  } = props

  function continuarJuego() {
    setRespuestaUsuario(null)
    siguienteVerbo()
    reanudarTemporizador()
  }

  return (
    <div className="grid place-items-center">
      <button 
        className="py-3 px-4 bg-white rounded-md disabled:bg-gray-600 disabled:text-white"
        disabled={respuestaUsuario == null}
        onClick={continuarJuego}
      >
        Continuar
      </button>
    </div>
  )
}

export default BotonContinuar