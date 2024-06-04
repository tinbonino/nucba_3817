import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './Saludo'
import Header from './Header'
import Principal from './Principal'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Principal/>
    <Footer/>
    </>
     
  )
}

export default App
