
function InformacionAudio(props) {
  const {
    vozSeleccionada,
    tonoAudio,
    velocidadAudio,
    volumenAudio,
    verbo
  } = props

  function reproducirAudio() {
    const audio = new SpeechSynthesisUtterance(verbo);
    audio.voice = vozSeleccionada; // Asigna la voz seleccionada
    //audio.lang = vozSeleccionada.lang;
    audio.pitch = tonoAudio;
    audio.rate = velocidadAudio;
    audio.volume = volumenAudio;

    speechSynthesis.speak(audio);
  }

  return (
    <div 
      className="bg-white rounded-full p-2 cursor-pointer md:hover:bg-black transition duration-500 group/padre"
      onClick={reproducirAudio}
    >
      <svg 
        className="fill-black md:group-hover/padre:fill-white transition duration-500 w-10 md:w-20"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
        <path d="m9 17 8-5-8-5z"></path>
      </svg>
    </div>
  )
}

export default InformacionAudio