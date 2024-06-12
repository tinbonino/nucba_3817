import { StyledContainer, PHeredado, StyledButton, StyledH4,StyledP } from "./EjemploStyled";



function EjemploStyled() {
  return (
    <StyledContainer>
        <StyledH4>Soy un h4 con styledComponents</StyledH4>
        <StyledP>Soy un h3 con styledComponents</StyledP>
        <h3>Soy un h3 simple sin styled</h3>
        <PHeredado>Soy un parrafo heredado</PHeredado>
        <StyledButton>Soy un boton con StyledCmponents</StyledButton>
        <StyledButton color width={"550px"}>Soy un boton con StyledCmponents y props</StyledButton>

    </StyledContainer>
  )
}

export default EjemploStyled