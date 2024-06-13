
import './App.css'
import AppWrapper from './components/AppWrapper/AppWrapper'
import EjemploEnLinea from './components/EjemploEnLinea/EjemploEnLinea'
import EjemploModule from './components/EjemploModule/EjemploModule'
import EjemploModule2 from "./components/EjemploModule2/EjemploModule2"
import EjemploStyled from './components/EjemploStyled/EjemploStyled.jsx'
import EjemploMaterialUi from './components/EjemploMaterialUi/EjemploMaterialUi.jsx'
function App() {
  

  return (
    <>
      <AppWrapper>
        <h1>Hola! Bienvenid@ a React</h1>
        <h2>Te presentamos a Camel</h2>
        <h3>Tengo hambre</h3>
        <EjemploEnLinea/>
        <EjemploModule/>
        <EjemploModule2/>
        <EjemploStyled/>
        <EjemploMaterialUi/>
      </AppWrapper>
    </>
  )
}

export default App
