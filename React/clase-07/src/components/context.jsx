import { useReducer, createContext } from "react";

const counterReducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return{...state, count: state.count+1};
        case "DECREMENT":
            return {...state,count: state.count-1};
        case "INCREMENT5":
            return {...state,count: state.count+5};
        case "MULTIPLY2":
            return {...state,count: state.count*2};
        case "RESET":
            return {...state,count:0};
        case "CAMBIARNOMBRE":
            return {...state,nombre:"Roberto"};
        case "CAMBIARCOLOR":
            return {...state,color:"crimson"}
        default:
            return state;

    }
  
};

export const CounterContext = createContext();

const CounterProvider= ({children})=>{
    
    const initialState= {
        count: 0,
        nombre:"Empanada",
        color: "black"
    }
    
    const [state, dispatch] = useReducer(counterReducer,initialState)

    return (
        <CounterContext.Provider value={{state,dispatch}}>
            {children}
        </CounterContext.Provider>

    )

};

export default CounterProvider;