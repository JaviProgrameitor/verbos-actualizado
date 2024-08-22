import { habilidades } from "../../utils/data/verbos"
import Burbujas from "../Burbujas/Burbujas"

function SeccionHabilidades(props) {
  const { agregarBurbuja, eliminarBurbuja, habilidadSeleccionada } = props

  return (
    <section className="pt-20">
      <h2 className="text-center font-bold text-2xl">Selecciona la habilidad.</h2>
      <div className='flex flex-wrap justify-center gap-4 mt-4'>
        {
          habilidades.map((habilidad, index) => 
            <Burbujas
              titulo={habilidad}
              informacion={habilidad}
              agregar={agregarBurbuja}
              eliminar={eliminarBurbuja}
              seleccionado={habilidadSeleccionada == habilidad}
              key={index}
            />
          )
        }
      </div>
    </section>
  )
}

export default SeccionHabilidades