import { tiemposTemporizador } from "../../utils/data/verbos"
import Burbujas from "../Burbujas/Burbujas"

function SeccionTemporizador(props) {
  const { agregarBurbuja, eliminarBurbuja, temporizadorSeleccionado } = props

  return (
    <section className="pt-20">
      <h2 className="text-center font-bold text-2xl">Selecciona el tiempo para responder.</h2>
      <div className='flex flex-wrap justify-center gap-4 mt-4'>
        {
          tiemposTemporizador.map((temporizador, index) => 
            <Burbujas
              titulo={temporizador == 0 ? 'Sin límite' : `${temporizador} segundos`}
              informacion={temporizador}
              agregar={agregarBurbuja}
              eliminar={eliminarBurbuja}
              seleccionado={temporizadorSeleccionado == temporizador}
              key={index}
            />
          )
        }
      </div>
    </section>
  )
}

export default SeccionTemporizador