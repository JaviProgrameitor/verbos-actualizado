
function Burbujas(props) {
  const { titulo, informacion, posicion, agregar, eliminar, seleccionado } = props

  function alterado() {
    seleccionado 
      ? eliminar(posicion)
      : agregar(informacion, posicion)
  }

  return (
    <div 
      className={
        `w-[150px] h-[100px] cursor-pointer grid place-items-center bg-purple-200 rounded-lg 
        shadow-xl transition-all duration-500 ${seleccionado && 'bg-purple-700 text-white'}
        md:hover:bg-purple-700 md:hover:text-white`
      }
      onClick={alterado}
    >
      {titulo}
    </div>
  )
}

export default Burbujas