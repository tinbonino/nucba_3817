import { useReducer } from 'react'

import './App.css'

function App() {

  const initialState = "steelblue";

  const reducer = (state,action) => {
    switch(action.type){
        case "crimson":
          return "crimson";
        case "verde":
          return "#2a9d8f";
        case "azul":
          return "#0081a7";
        default:
          return state;
    }
    
  }



    const [state,dispatch] = useReducer(reducer, initialState);


  return (
    <>
     <h2 style={{color:state}}>Soy un título que cambia de color UUuUU</h2>
     <button onClick={() => dispatch({type:"crimson"})} >Crimson</button>
     <button onClick={() => dispatch({type:"verde"})} >verde</button>
     <button onClick={() => dispatch({type:"azul"})} >azul</button>
    </>
  )
}

export default App
