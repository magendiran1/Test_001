import React,{useContext} from 'react'
import { Usercontext,secondContext } from './ContextA'

// function ContextC() {
//     return (
//         <div>
//             <Usercontext.Consumer>
//                 {
//                     ({name})=>{
//                         return(
// <secondContext.Consumer>
//     {
//         ({name})=>{
//             return(
//                 <div>
//                     user name :{name} mother name :{name}
//                 </div>
//             )
//         }
//     }
// </secondContext.Consumer>
//                         )
//                     }
//                 }
//             </Usercontext.Consumer>
//         </div>
//     )
// }
 
function ContextC(){
    debugger;
    const Son=useContext(Usercontext)
    const mother=useContext(secondContext)
    return(
        <div>
<h1>{Son.name}{mother.name}</h1>
        </div>
    )
}
export default ContextC
