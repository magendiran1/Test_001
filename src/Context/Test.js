import React from 'react'
import { Mycontext} from './Contexts'

export default (props) => {
    return (
        <Mycontext.Consumer>
        {
            (context)=>{
                return(
                    <div>
            <h1>Test component {context.count} 🌿 </h1>
            <button onClick={context.Increment}>Adding </button>
            <button onClick={context.Decrement}>Minusing</button>
                    </div>
                )
            }
        }
                </Mycontext.Consumer>
    )
}