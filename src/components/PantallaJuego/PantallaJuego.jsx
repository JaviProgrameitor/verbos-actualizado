import { useEffect, useState } from "react"
import Modal from "../Modal/Modal"

import { aleatorio } from "../../utils/functions/functions"

import { burbujas } from '../../utils/data/verbos'
import TableroReloj from "../TableroReloj/TableroReloj"
import TableroInformacion from "../TableroInformacion/TableroInformacion"
import TableroRespuestas from "../TableroRespuestas/TableroRespuestas"
import BotonContinuar from "../BotonContinuar/BotonContinuar"

function PantallaJuego(props) {
  const { 
    verbosSeleccionadas,
    indexVerbosSeleccionadas,
    tiGramaSeleccionado,
    indexTiGramaSeleccionado,
    temporizadorSeleccionado,
    tipoPreguntaSeleccionada,
    vozSeleccionada,
    tonoAudio,
    velocidadAudio,
    volumenAudio,
    tipoRespuestaSeleccionada,
    estado, 
    setEstado 
  } = props

  const [ verbos, setVerbos ] = useState(verbosSeleccionadas)
  const [ indiceVerbo, setIndiceVerbo ] = useState(0)
  const [ indicePregunta, setIndicePregunta ] = useState(asignarIndice())
  const [ opcionesRespuestas, setOpcionesRespuestas ] = useState([])
  const [ temporizador, setTemporizador ] = useState(temporizadorSeleccionado)

  const [ respuestaUsuario, setRespuestaUsuario ] = useState(null)

  function asignarIndice() {
    if(indexTiGramaSeleccionado === 1) return 0
    else return 1
  }

  function detenerJuego() {
    setEstado(false)
  }

  function actualizarVerbos() {
    const nuevosVerbos = verbos.toSpliced(indiceVerbo, 1)

    setVerbos(nuevosVerbos)
  }

  function siguienteVerbo() {
    actualizarVerbos()
  }

  function agregarOpcionesRespuestas(nuevoIndice) {
    //1er verbo
    const burbuja1 = aleatorio(0, (burbujas.length - 1))
    const verbo1 = aleatorio(0, (burbujas[burbuja1].length - 1))

    //2do verbo
    const burbuja2 = aleatorio(0, (burbujas.length - 1))
    const verbo2 = aleatorio(0, (burbujas[burbuja2].length - 1))

    //3er verbo
    const burbuja3 = aleatorio(0, (burbujas.length - 1))
    const verbo3= aleatorio(0, (burbujas[burbuja3].length - 1))

    //Verbo correcto
    const verboCorrecto = verbos[nuevoIndice][indexTiGramaSeleccionado]

    //Opciones
    const respuestas = [
      burbujas[burbuja1][verbo1][indexTiGramaSeleccionado], 
      burbujas[burbuja2][verbo2][indexTiGramaSeleccionado], 
      burbujas[burbuja3][verbo3][indexTiGramaSeleccionado], 
    ]

    //Agregar verbo correcto
    respuestas.splice(aleatorio(0, respuestas.length), 0, verboCorrecto)

    //Actualizar lista de opciones respuestas
    setOpcionesRespuestas(respuestas)
  }

  function reanudarTemporizador() {
    setTemporizador(temporizadorSeleccionado)
  }

  useEffect(() => {
    if(verbos.length === 0) {
      detenerJuego()
      return
    }

    let nuevoIndice = aleatorio(0, (verbos.length - 1))

    setIndiceVerbo(nuevoIndice)
    agregarOpcionesRespuestas(nuevoIndice)
  }, [verbos])

  useEffect(() => {
    if(temporizadorSeleccionado != 0 && temporizador == 0) setRespuestaUsuario(verbos.length === 0 || (verbos.length - 1) < indiceVerbo ? '' : verbos[indiceVerbo][indexTiGramaSeleccionado])

  }, [temporizador])

  return (
    <>
      <Modal 
        estado={estado}
      />
      <div 
        className="translate-x-[-50%] translate-y-[-50%] fixed top-[50%] left-[50%] z-50 w-4/5 h-4/5 
        bg-purple-400 rounded-lg grid grid-cols-1 grid-rows-[55px,1fr,1fr,80px] p-5"
      >
        <TableroReloj 
          temporizadorSeleccionado={temporizadorSeleccionado}
          temporizador={temporizador}
          setTemporizador={setTemporizador}
          setEstado={detenerJuego}
          respuestaUsuario={respuestaUsuario}
        />
        <TableroInformacion
          tipoPreguntaSeleccionada={tipoPreguntaSeleccionada}
          tiGramaSeleccionado={tiGramaSeleccionado}
          vozSeleccionada={vozSeleccionada}
          tonoAudio={tonoAudio}
          velocidadAudio={velocidadAudio}
          volumenAudio={volumenAudio}
          verbo={ verbos.length === 0 || (verbos.length - 1) < indiceVerbo ? '' : verbos[indiceVerbo][indicePregunta]}
          setEstado={detenerJuego}
        />
        <TableroRespuestas
          verboCorrecto={ verbos.length === 0 || (verbos.length - 1) < indiceVerbo ? '' : verbos[indiceVerbo][indexTiGramaSeleccionado]}
          opcionesRespuestas={opcionesRespuestas}
          respuestaUsuario={respuestaUsuario}
          setRespuestaUsuario={setRespuestaUsuario}
          tipoRespuestaSeleccionada={tipoRespuestaSeleccionada}
        />
        <BotonContinuar
          verbosSeleccionadas={verbos}
          siguienteVerbo={siguienteVerbo}
          respuestaUsuario={respuestaUsuario}
          setRespuestaUsuario={setRespuestaUsuario}
          reanudarTemporizador={reanudarTemporizador}
        />
      </div>
    </>
  )
}

export default PantallaJuego