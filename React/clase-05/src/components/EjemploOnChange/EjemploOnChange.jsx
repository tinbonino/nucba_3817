import { useState } from "react"
import styled from "styled-components"

const InputForm = styled.input`
    height: 2rem;
    width: 100%;
    outline: none;
    border: none;
    background: transparent;
    border-bottom: 1px solid #4747ff;
    color: white;
    margin-top: 2rem;
`

function EjemploOnChange() {

    const [value,setValue]=useState("")

    const handleValue=(e) => {
      setValue(e.target.value);
    }

  return (
    <>
        <p>{value || "El input está vacío"}</p>
        <InputForm onChange={handleValue} placeholder="Escriba lo que quiera que se vea" />
    </>
  )
}

export default EjemploOnChange