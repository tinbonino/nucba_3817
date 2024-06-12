import Hijo from './Hijo'
import './App.css'

function App() {
 
  console.log("Este es el componente App")


  return (
    <div className='Padre'>
      
      <Hijo nombre="Martín" edad="25"/>
      <Hijo nombre="Pepe" edad="45"/>
      <Hijo nombre="Dante"/>
      <Hijo nombre="Zule" edad="16"/>
  
      
    </div>
  )
}

export default App
