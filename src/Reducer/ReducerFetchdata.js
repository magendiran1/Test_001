// Use Reducer  -- to manage the local state
// to share the state  between component we use gobal state managenment
// that is called as useReducer+useContext

import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialstate ={
    loading :true,
    post:{},
    error :""
}
const reducer=(state,action)=>{
switch(action.type){
    case "Fetch_success":
        return{
            loading:false,
            post:action.payload,
            error:''
        }
        case "Fetch_error":
            return{
                loading:false,
                post:{},
                error:'Some thing went Wrong'
            }
            default:
                return state
}
}
function ReducerFetchdata() {
const [state,dispatch]=useReducer(reducer,initialstate)

useEffect(()=>{
axios
.get('http://jsonplaceholder.typicode.com/posts/1')
.then(res=>{
    dispatch({type:'Fetch_success',payload:res.data})
}).catch(error =>{
    dispatch({type:"Fectch_error"})
})
},[])
    return (
        
        <div>
        
            {state.loading ? "loading": state.post.title}
            {state.error ? state.error : null}
            <h1>HEllo</h1>
        </div>
    )
}

export default ReducerFetchdata
