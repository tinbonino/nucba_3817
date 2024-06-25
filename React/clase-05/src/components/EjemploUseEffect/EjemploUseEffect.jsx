import { useState, useEffect } from "react"

import { ClickButton } from "../EjemploUseState/EjemploUseState"


function EjemploUseEffect() {

  const [click,setClick] = useState(false);
  const [click2,setClick2] = useState(false);

  const clickHandler= () => {
    setClick(!click);
  }
  const click2Handler= () => {
    setClick2(!click2);
  }


  // En la funcion de callback (primer argumento) va lo que quiero que se ejecute
  // En el array de dependencias (segundo argumento) va cuando quiero que se ejecute

  useEffect(() => {
    console.log("Fase de montaje (primer render del componente)");
  },[])

  useEffect(() => {
    console.log("El estado click cambió")    
  },[click])

  useEffect(() => {
    console.log("El estado click2 cambió")    
  },[click2])


  return (
    <div>
      <span>
        {click? "True":"False"}
      </span>
      <ClickButton onClick={clickHandler}>Hazle Click!</ClickButton>
      <span>
        {click2? "True":"False"}
      </span>
      <ClickButton onClick={click2Handler}>Hazle Click!</ClickButton>
    </div>
  )
}

export default EjemploUseEffect