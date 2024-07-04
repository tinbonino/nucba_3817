import "../styles.css"

import { Link } from "react-router-dom"
function Producto({id,nombre,precio}) {
  return (
    <div className="card">
        <h2>{nombre}</h2>
        <h3>{precio}</h3>
        <Link to={`/productos/${id}`}>Ver detalles</Link>
    </div>
  )
}

export default Producto