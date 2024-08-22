import { tipoRespuesta } from "../../utils/data/verbos"
import Burbujas from '../Burbujas/Burbujas.jsx'

function SeccionRespuesta(props) {
  const { agregarBurbuja, eliminarBurbuja, tipoRespuestaSeleccionada } = props

  return (
    <section className='pt-20'>
      <h2 className="text-center font-bold text-2xl">Tipo de Respuesta</h2>
      <div className='flex flex-wrap justify-center gap-4 mt-4'>
        {
          tipoRespuesta.map((respuesta, index) => 
            <Burbujas
              titulo={respuesta}
              informacion={respuesta}
              posicion={index}
              agregar={agregarBurbuja}
              eliminar={eliminarBurbuja}
              seleccionado={respuesta == tipoRespuestaSeleccionada}
              key={index}
            />
          )
        }
      </div>
    </section>
  )
}

export default SeccionRespuesta