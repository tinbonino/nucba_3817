
import { CounterContext } from "./context";
import { useContext } from "react";



function Counter() {

    const {state,dispatch} = useContext(CounterContext);

  return (
    <div>
        <button onClick={() => dispatch({type:"INCREMENT"})}>+</button>
        <h2>Contador: {state.count}</h2>
        <button onClick={() => dispatch({type:"DECREMENT"})}>-</button>
        <button onClick={() => dispatch({type:"INCREMENT5"})}>+5</button>
        <button onClick={() => dispatch({type:"MULTIPLY2"})}>x 2</button>
        <button onClick={() => dispatch({type:"RESET"})}>reset</button>
        <button onClick={() => dispatch({type:"CAMBIARNOMBRE"})}>Cambiar Nombre</button>
        <button onClick={() => dispatch({type:"CAMBIARCOLOR"})}>Cambiar color</button>
        <h2 style={{color:state.color}}>Nombre: {state.nombre}</h2>
    </div>
  )
}

export default Counter