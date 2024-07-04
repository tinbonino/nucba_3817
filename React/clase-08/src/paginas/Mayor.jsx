
function Mayor({setAuth}) {
    function handleAuth() {
      setAuth(prevAuth=>!prevAuth)
      //      ultimo 
      //    valor del
      //      estado
      console.log("cambio el valor de setAuth")
    }
  return (
    <div className="boton" onClick={handleAuth}>
        Soy Mayor de 18
    </div>
  )
}

export default Mayor