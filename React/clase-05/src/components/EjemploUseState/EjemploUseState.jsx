import { useState } from "react"
import styled from "styled-components"

export const ClickButton = styled.button`
    width: 200px;
    height: 50px;
    background-color: blueviolet;
    color: white;
    border-radius: 10px;

`



function EjemploUseState() {

    const [isToggle,setIsToggle] = useState(false);

    const handleToggle= () => {
      setIsToggle(!isToggle)
    }



  return (
    <>
        <span>
            {isToggle ? "Es true" : "Es false"}
        </span>
        <ClickButton onClick={handleToggle}>Toggle</ClickButton>
    </>
  )
}

export default EjemploUseState