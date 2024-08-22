import './App.css';

import { useState } from 'react';

import Header from './components/Header/Header';
import Contenido from './components/Contenido/Contenido';
import PantallaCarga from './components/PantallaCarga/PantallaCarga';
import PantallaJuego from './components/PantallaJuego/PantallaJuego';

function App() {
  //Estados de burbujas de verbos seleccionados
  const [ verbosSeleccionadas, setVerbosSeleccionadas ] = useState([])
  const [ indexVerbosSeleccionadas, setIndexVerbosSeleccionadas ] = useState([])

  //Estados de tiempos gramaticales seleccionado
  const [ tiGramaSeleccionado, setTiGramaSeleccionado ] = useState(null)
  const [ indexTiGramaSeleccionado, setIndexTiGramaSeleccionado ] = useState(null)

  //Estados de temporizador seleccionado
  const [ temporizadorSeleccionado, setTemporizadorSeleccionado ] = useState(null)

  //Estados de el tipo de pregunta
  const [ tipoPreguntaSeleccionada, setTipoPreguntaSeleccionada ] = useState(null)

  //Estados Personalizar Audio
  const [ vozSeleccionada, setVozSeleccionada ] = useState(null)
  const [ tonoAudio, setTonoAudio ] = useState(1)
  const [ velocidadAudio, setVelocidadAudio ] = useState(1)
  const [ volumenAudio, setVolumenAudio ] = useState(1)

  //Estados de el tipo de respuesta
  const [ tipoRespuestaSeleccionada, setTipoRespuestaSeleccionada ] = useState(null)

  //Estado modal
  const [ estadoModal, setEstadoModal ] = useState(false)

  //Estado juego
  const [ juego, setJuego ] = useState(false)

  //Estado de las revisiones
  const [ revision, setRevision ] = useState('')

  //Funciones para comenzar el juego
  function preComenzarJuego() {
    let revisiones = revisarSelecciones()

    if(revisiones !== true) {
      setRevision(revisiones)
      return
    }

    setEstadoModal(true)
    setRevision('')
  }

  function comenzarJuego(estado) {
    setEstadoModal(false)
    setJuego(true)
  }

  function revisarSelecciones() {
    if(verbosSeleccionadas.length === 0) return 'Selecciona una burbuja de verbos para poder continuar.'
    else if(tiGramaSeleccionado === null) return 'Selecciona un tiempo gramatical para poder continuar.'
    else if(temporizadorSeleccionado === null) return 'Selecciona el temporizador para poder continuar.'
    else if(tipoPreguntaSeleccionada === null) return 'Selecciona el tipo de pregunta para poder continuar.'
    else if(tipoRespuestaSeleccionada === null) return 'Selecciona el tipo de respuesta para poder continuar.'

    return true
  }


  return (
    <div className="App font-poppins">
      <Header />
      <Contenido 
        verbosSeleccionadas={verbosSeleccionadas}
        setVerbosSeleccionadas={setVerbosSeleccionadas}
        indexVerbosSeleccionadas={indexVerbosSeleccionadas}
        setIndexVerbosSeleccionadas={setIndexVerbosSeleccionadas}
        tiGramaSeleccionado={tiGramaSeleccionado}
        setTiGramaSeleccionado={setTiGramaSeleccionado}
        indexTiGramaSeleccionado={indexTiGramaSeleccionado}
        setIndexTiGramaSeleccionado={setIndexTiGramaSeleccionado}
        temporizadorSeleccionado={temporizadorSeleccionado}
        setTemporizadorSeleccionado={setTemporizadorSeleccionado}
        tipoPreguntaSeleccionada={tipoPreguntaSeleccionada}
        setTipoPreguntaSeleccionada={setTipoPreguntaSeleccionada}
        vozSeleccionada={vozSeleccionada}
        setVozSeleccionada={setVozSeleccionada}
        tonoAudio={tonoAudio}
        setTonoAudio={setTonoAudio}
        velocidadAudio={velocidadAudio}
        setVelocidadAudio={setVelocidadAudio}
        volumenAudio={volumenAudio}
        setVolumenAudio={setVolumenAudio}
        tipoRespuestaSeleccionada={tipoRespuestaSeleccionada}
        setTipoRespuestaSeleccionada={setTipoRespuestaSeleccionada}
      />
      <div className='grid place-items-center mt-10 px-3 space-y-3'>
        <button 
          className='bg-purple-800 py-3 px-4 rounded-md text-white hover:scale-110 transition-all duration-200'
          onClick={preComenzarJuego}
          >
          Comenzar
        </button>
        <p className='text-red-600 text-center'>{revision}</p>
      </div>
      {
        estadoModal && (
          <PantallaCarga 
            estado={estadoModal}
            setEstado={comenzarJuego}
          />
        )
      }
      {
        juego && (
          <PantallaJuego
            verbosSeleccionadas={verbosSeleccionadas.flat(1)}
            indexVerbosSeleccionadas={indexVerbosSeleccionadas}
            tiGramaSeleccionado={tiGramaSeleccionado}
            indexTiGramaSeleccionado={indexTiGramaSeleccionado}
            temporizadorSeleccionado={temporizadorSeleccionado}
            tipoPreguntaSeleccionada={tipoPreguntaSeleccionada}
            vozSeleccionada={vozSeleccionada}
            tonoAudio={tonoAudio}
            velocidadAudio={velocidadAudio}
            volumenAudio={volumenAudio}
            tipoRespuestaSeleccionada={tipoRespuestaSeleccionada}
            estado={juego}
            setEstado={setJuego}
          />
        )
      }
    </div>
  );
}

export default App;
