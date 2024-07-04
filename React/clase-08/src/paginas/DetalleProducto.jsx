import { productos } from "../productos";
import { useParams } from "react-router-dom";

function DetalleProducto() {
    const {id} = useParams();

    const producto= productos.find(prod=>prod.id === parseInt(id))
    
  return (
    <>
        {producto?(
        <div>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <h3>{producto.precio}</h3>
        </div>
        ):(
        <p>Producto no encontrado</p>
        )}
    </>
  )
}

export default DetalleProducto