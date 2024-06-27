
import './App.css'
import CounterConState from './components/CounterConState'
import CounterProvider from './components/context';
import Counter from './components/Counter';
import Display from './components/Display'; 
function App() {


  return (
    <>
      <CounterProvider>
        <Counter/>
        <Display/>
      </CounterProvider>
      <CounterConState/>
    </>
  )
}

export default App
