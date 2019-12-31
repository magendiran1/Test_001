import React,{useReducer} from 'react'

const intialState={
    firstcount :0
}
// //  from here reducer is function in javascript it accept two values and return one values
// const reducer=(state,action)=>{
// return newState
// }

 export const reducer =(state,action)=>{
switch(action.type ){
case "increment":
    return {firstcount: state.firstcount +1}
    case "decrement":
        return{firstcount: state.firstcount -1}
        case "reset":
            return intialState
            default :
            return state
}
}
function Reducerobject() {
//   from here you need to know useReducer is a function its accept two argument one is (reducer) its function 
// another one is intialstate
//  inga pathiyana reducer kita vadhu rendu parameter iruku 
// one is state and action  so  indha count vadhu state eduthuku apram dispatch vadhu action eduthuku 
const [count ,dispatch]= useReducer(reducer,intialState)
    return (
        <div>
            <h1> {count.firstcount}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>

        </div>
    )
}

export default Reducerobject
