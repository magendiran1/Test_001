import React,{useReducer} from 'react'

const intialState=0
// //  from here reducer is function in javascript it accept two values and return one values
// const reducer=(state,action)=>{
// return newState
// }

 export const reducer =(state,action)=>{
switch(action){
case "increment":
    return state +1
    case "decrement":
        return state -1
        case "reset":
            return intialState
            default :
            return state
}
}
function HookReducer() {
//   from here you need to know useReducer is a function its accept two argument one is (reducer) its function 
// another one is intialstate
   const [count ,dispatch]= useReducer(reducer,intialState)
    return (
        <div>
            <h1> {count}</h1>
            <button onClick={()=>dispatch("increment")}>Increment</button>
            <button onClick={()=>dispatch("decrement")}>Decrement</button>
            <button onClick={()=>dispatch("reset")}>Reset</button>

        </div>
    )
}

export default HookReducer
