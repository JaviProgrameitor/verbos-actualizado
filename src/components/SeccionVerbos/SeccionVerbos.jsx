import { burbujas } from "../../utils/data/verbos"
import Burbujas from '../Burbujas/Burbujas.jsx'

function SeccionVerbos(props) {
  const { agregarBurbuja, eliminarBurbuja, indexBurbujasSeleccionadas } = props

  return (
    <section className='pt-20'>
      <h2 className="text-center font-bold text-2xl">¿Qué quieres estudiar hoy?</h2>
      <div className='flex flex-wrap justify-center gap-4 mt-4'>
        {
          burbujas.map((burbuja, index) => 
            <Burbujas
              titulo={`Burbuja ${index + 1}`}
              informacion={burbuja}
              posicion={index}
              agregar={agregarBurbuja}
              eliminar={eliminarBurbuja}
              seleccionado={indexBurbujasSeleccionadas.includes(index)}
              key={index}
            />
          )
        }
      </div>
    </section>
  )
}

export default SeccionVerbos