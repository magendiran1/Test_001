import React,{useState} from 'react'

export default function Hookcountertwo() {

    const [count,IncrementCount ] = useState(0)

// const IncrementCount5 =()=>{
//     for(let i=count;i<=5; i++){
//         IncrementCount(count+1)
//     }
// }

const IncrementCount5 =()=>{
    for(let i=0;i<5; i++){
        IncrementCount(prevstate=>prevstate+1)
    }
}
    return (
        <div>
            count {count}
            <button onClick={()=>IncrementCount (count +1)}>IncrementCount</button>
            <button onClick={()=>IncrementCount(count -1)}>DecrementCount</button>
            <button onClick={IncrementCount5}>IncrementCount5</button>
        </div>
    )
}


//  this component will explain prevstate in function component
//  see in the IncrementCount5 it will increment 5 on every click 
//  but we are not using Prevstate that's why its increse one by one for that we need to use 
// Prevstate 