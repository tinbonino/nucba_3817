function Hijo({nombre,edad}) {
  return (
    <div className="Hijo">
        <h2>Nombre del hijo: {nombre}</h2>
        {edad==undefined ? null:<h3>Edad: {edad}</h3>}
        
        
        {
        nombre=="Dante"
        ?<h3>Anda a tomar super gridito</h3>
        :null
        }
    </div>
  )
}

export default Hijo