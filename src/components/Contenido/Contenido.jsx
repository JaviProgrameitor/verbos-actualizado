
import SeccionVerbos from "../SeccionVerbos/SeccionVerbos"
import SeccionTiempoGramatica from "../SeccionTiempoGramatica/SeccionTiempoGramatica"
import SeccionTemporizador from "../SeccionTemporizador/SeccionTemporizador"
import SeccionPregunta from "../SeccionPregunta/SeccionPregunta"
import SeccionRespuesta from "../SeccionRespuesta/SeccionRespuesta"
import SeccionPersonalizarAudio from "../SeccionPersonalizarAudio/SeccionPersonalizarAudio"

function Contenido(props) {
  const {
    verbosSeleccionadas,
    setVerbosSeleccionadas,
    indexVerbosSeleccionadas,
    setIndexVerbosSeleccionadas,
    tiGramaSeleccionado,
    setTiGramaSeleccionado,
    setIndexTiGramaSeleccionado,
    temporizadorSeleccionado,
    setTemporizadorSeleccionado,
    tipoPreguntaSeleccionada,
    setTipoPreguntaSeleccionada,
    vozSeleccionada,
    setVozSeleccionada,
    tonoAudio,
    setTonoAudio,
    velocidadAudio,
    setVelocidadAudio,
    volumenAudio,
    setVolumenAudio,
    tipoRespuestaSeleccionada,
    setTipoRespuestaSeleccionada
  } = props

  //Funciones de verbos
  function agregarVerbo(burbuja, index) {
    setVerbosSeleccionadas([...verbosSeleccionadas, burbuja])
    setIndexVerbosSeleccionadas([...indexVerbosSeleccionadas, index])
  }

  function eliminarVerbo(index) {
    //Encontrar el indice de el verbo
    const indice = indexVerbosSeleccionadas.indexOf(index)
    
    //Eliminar las burbujas
    const nuevasBurbujas = verbosSeleccionadas.toSpliced(indice, 1)
    const nuevasIndices = indexVerbosSeleccionadas.toSpliced(indice, 1)

    //Actualizar las nuevas burbujas
    setVerbosSeleccionadas(nuevasBurbujas)
    setIndexVerbosSeleccionadas(nuevasIndices)
  }

  //Funciones tiempos gramaticales
  function agregarTiGrama(tiGrama, index) {
    setTiGramaSeleccionado(tiGrama)
    setIndexTiGramaSeleccionado(index)
  }

  function eliminarTiGrama() {
    setTiGramaSeleccionado(null)
    setIndexTiGramaSeleccionado(null)
  }

  //Funciones temporizador
  function agregarTemporizador(tiempo) {
    setTemporizadorSeleccionado(tiempo)
  }

  function eliminarTemporizador() {
    setTemporizadorSeleccionado(null)
  }

  //Funciones tipo de preguntas
  function agregarTipoPregunta(pregunta) {
    setTipoPreguntaSeleccionada(pregunta)
  }

  function eliminarTipoPregunta() {
    setTipoPreguntaSeleccionada(null)
  }

  //Funciones tipo de respuesta
  function agregarTipoRespuesta(respuesta) {
    setTipoRespuestaSeleccionada(respuesta)
  }

  function eliminarTipoRespuesta() {
    setTipoRespuestaSeleccionada(null)
  }

  return (
    <main className="px-3">
      <SeccionVerbos 
        agregarBurbuja={agregarVerbo}
        eliminarBurbuja={eliminarVerbo}
        indexBurbujasSeleccionadas={indexVerbosSeleccionadas}
      />
      <SeccionTiempoGramatica
        agregarBurbuja={agregarTiGrama}
        eliminarBurbuja={eliminarTiGrama}
        tiGramaSeleccionado={tiGramaSeleccionado}
      />
      <SeccionTemporizador
        agregarBurbuja={agregarTemporizador}
        eliminarBurbuja={eliminarTemporizador}
        temporizadorSeleccionado={temporizadorSeleccionado}
      />
      <SeccionPregunta
        agregarBurbuja={agregarTipoPregunta}
        eliminarBurbuja={eliminarTipoPregunta}
        tipoPreguntaSeleccionada={tipoPreguntaSeleccionada}
      />
      {
        tipoPreguntaSeleccionada == 'Audio' && (
          <SeccionPersonalizarAudio 
            vozSeleccionada={vozSeleccionada}
            setVozSeleccionada={setVozSeleccionada}
            tonoAudio={tonoAudio}
            setTonoAudio={setTonoAudio}
            velocidadAudio={velocidadAudio}
            setVelocidadAudio={setVelocidadAudio}
            volumenAudio={volumenAudio}
            setVolumenAudio={setVolumenAudio}
          />
        )
      }
      <SeccionRespuesta
        agregarBurbuja={agregarTipoRespuesta}
        eliminarBurbuja={eliminarTipoRespuesta}
        tipoRespuestaSeleccionada={tipoRespuestaSeleccionada}
      />
    </main>
  )
}

export default Contenido