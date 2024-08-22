
import InformacionEscrita from "../InformacionEscrita/InformacionEscrita"
import InformacionAudio from "../InformacionAudio/InformacionAudio"

function TableroInformacion(props) {
  const { 
    tipoPreguntaSeleccionada,
    tiGramaSeleccionado, 
    vozSeleccionada,
    tonoAudio,
    velocidadAudio,
    volumenAudio,
    verbo
  } = props

  return (
    <div className="flex justify-center items-center flex-wrap gap-1 md:gap-3 text-center text-3xl md:text-5xl font-medium font-fredoka relative transition-all">
      {tiGramaSeleccionado} de
      {
        tipoPreguntaSeleccionada == 'Escrito'
          ? <InformacionEscrita 
              verbo={verbo}
            />
          : <InformacionAudio
              vozSeleccionada={vozSeleccionada}
              tonoAudio={tonoAudio}
              velocidadAudio={velocidadAudio}
              volumenAudio={volumenAudio}
              verbo={verbo}
            />
      }
    </div>
  )
}

export default TableroInformacion