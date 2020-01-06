import React ,{useEffect,useRef} from 'react'


const inputRef =useRef(null)
function UseRefinput() {

useEffect(
    ()=>{
        //  focus the input filed when load 
        inputRef.current.focus()
    },[]
)
    return (
        <div>
            <input  ref={inputRef} type="text" />
        </div>
    )
}

export default UseRefinput

// useRef are used to focus the input element