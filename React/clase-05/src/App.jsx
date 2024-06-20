import { useState } from 'react'

import Envoltorio from './components/Envoltorio/Envoltorio'
import EjemploOnChange from './components/EjemploOnChange/EjemploOnChange'
import EjemploOnSubmit from './components/EjemploOnSubmit/EjemploOnSubmit'
import EjemploUseRef from './components/EjemploUseRef/EjemploUseRef'
import EjemploUseEffect from './components/EjemploUseEffect/EjemploUseEffect'
import EjemploUseState from './components/EjemploUseState/EjemploUseState'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Envoltorio>
        <EjemploUseState/>
        <EjemploUseRef/>
        <EjemploOnChange/>
        <EjemploOnSubmit/>
     </Envoltorio>
    </>
  )
}

export default App
