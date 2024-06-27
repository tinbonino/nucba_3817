import { useState } from "react"

function CounterConState() {

    const [counter,setCounter]=useState(0);

    const incrementHandler = () => {
      setCounter(prevState=>prevState+1)
    }
    const decrementHandler = () => {
      setCounter(prevState=>prevState-1)
    }

  return (
    <div>
        <button onClick={incrementHandler}>+</button>
        <h2>{counter}</h2>
        <button onClick={decrementHandler}>-</button>
    </div>
  )
}

export default CounterConState