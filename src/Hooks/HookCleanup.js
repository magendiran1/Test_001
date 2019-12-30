import React ,{useState}from 'react'
import HookUseeffect from './HooksUseeffect'

function HookCleanup() {

    const [display,setDisplay]=useState(true)
    return (
        <div>
            <button onClick={()=>{setDisplay(!display)}}>Toggle button</button>
            {display && <HookUseeffect />}
        </div>
    )
}

export default HookCleanup


//  why we create this component means in hook how to use the component willunmount     