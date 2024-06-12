import {container,parrafo} from "./EjemploModule.module.css"

function EjemploModule() {
  return (
    <div>
        <div className={container}>
            <p className={parrafo}>
                Primer ejemplo de module
            </p>

        </div>
    </div>
  )
}

export default EjemploModule