import { useEffect, useState } from "react"

function SeccionPersonalizarAudio(props) {
  const {
    vozSeleccionada,
    setVozSeleccionada,
    tonoAudio,
    setTonoAudio,
    velocidadAudio,
    setVelocidadAudio,
    volumenAudio,
    setVolumenAudio,
  } = props

  const [ opcionesVoces, setOpcionesVoces ] = useState([])

  useEffect(() => {
    const loadVoices = () => {
      const synthVoices = window.speechSynthesis.getVoices();
      setOpcionesVoces(synthVoices);
      if (synthVoices.length > 0) {
        setVozSeleccionada(synthVoices[0]); // Selecciona la primera voz por defecto
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, [])

  return (
    <section className='pt-20'>
      <h2 className="text-center font-bold text-2xl">Personaliza el Audio</h2>
      <div className='flex flex-col items-center gap-4 mt-4'>
        <select 
          className="voice"
          value={vozSeleccionada ? vozSeleccionada.name : ''}
          onChange={(e) => {
            const voice = opcionesVoces.find(v => v.name === e.target.value);
            setVozSeleccionada(voice);
          }}
        >
          {
            opcionesVoces.map((voz, index) =>
              <option value={voz.name} key={index}>{voz.name}</option>
            )
          }
        </select>

        <label
          className="flex flex-col"
        >
          Tono:
          <input 
            className="pitch" 
            type="range" 
            min="0" 
            max="2" 
            step="0.25" 
            value={tonoAudio} 
            onChange={(e) => setTonoAudio(e.target.value)}
          />
        </label>
        <label>
          Velocidad:
          <input 
            className="rate" 
            type="range" 
            min="0" 
            max="2" 
            step="0.25" 
            value={velocidadAudio}
            onChange={(e) => setVelocidadAudio(e.target.value)}
          />
        </label>
        <label>
          Volumen:
          <input 
            className="volume" 
            type="range" 
            min="0" 
            max="1" 
            step="0.1" 
            value={volumenAudio} 
            onChange={(e) => setVolumenAudio(e.target.value)}
          />
        </label>
      </div>
    </section>
  )
}

export default SeccionPersonalizarAudio