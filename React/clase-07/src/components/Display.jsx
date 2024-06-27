import { CounterContext } from "./context";
import { useContext } from "react"

function Display() {

const {state}= useContext(CounterContext);

  return (
    <div>
        <h2>Valor del contador: {state.count}</h2>
    </div>
  )
}

export default Display