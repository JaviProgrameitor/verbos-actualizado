
import { tipoPregunta } from "../../utils/data/verbos"
import Burbujas from '../Burbujas/Burbujas.jsx'

function SeccionPregunta(props) {
  const { agregarBurbuja, eliminarBurbuja, tipoPreguntaSeleccionada } = props

  return (
    <section className='pt-20'>
      <h2 className="text-center font-bold text-2xl">Tipo de Pregunta</h2>
      <div className='flex flex-wrap justify-center gap-4 mt-4'>
        {
          tipoPregunta.map((pregunta, index) => 
            <Burbujas
              titulo={pregunta}
              informacion={pregunta}
              posicion={index}
              agregar={agregarBurbuja}
              eliminar={eliminarBurbuja}
              seleccionado={pregunta == tipoPreguntaSeleccionada}
              key={index}
            />
          )
        }
      </div>
    </section>
  )
}

export default SeccionPregunta