import { tiemposVerbales } from "../../utils/data/verbos"

import Burbujas from "../Burbujas/Burbujas"

function SeccionTiempoGramatica(props) {
  const { agregarBurbuja, eliminarBurbuja, tiGramaSeleccionado } = props

  return (
    <section className="pt-20">
      <h2 className="text-center font-bold text-2xl">¿Qué tiempo gramatical quieres estudiar?</h2>
      <div className='flex flex-wrap justify-center gap-4 mt-4'>
        {
          tiemposVerbales.map((tiempo, index) =>
            <Burbujas
              titulo={tiempo}
              informacion={tiempo}
              agregar={agregarBurbuja}
              eliminar={eliminarBurbuja}
              seleccionado={tiGramaSeleccionado == tiempo}
              posicion={index}
              key={index}
            />
          )
        }
      </div>
    </section>
  )
}

export default SeccionTiempoGramatica