import { ClickButton } from "../EjemploUseState/EjemploUseState"
import { useState } from "react";
function EjemploOnSubmit() {

    // Estado para el valor del input
    const [inputValue, setInputValue] = useState('');

    // Manejar el cambio en el input
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    // Manejar el envío del formulario
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor
      console.log("Formulario enviado con el valor:", inputValue);
        alert("Formulario enviado")
      // Resetear el input después de enviar el formulario
      setInputValue('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Escribe algo..."
        />
        <button type="submit">Enviar</button>
      </form>
    );
  };
  
export default EjemploOnSubmit