import React from 'react'

// function FRREF() {
//     return (
//         <div>
//             <input />
//         </div>
//     )
// }

// we are just modify the normal function to arrow function because of to use forward method in REFs
const FRREF =React.forwardRef((props, ref) =>{
    return(
        <div>
            <input ref={ref} />
        </div>
    )
})
export default FRREF
