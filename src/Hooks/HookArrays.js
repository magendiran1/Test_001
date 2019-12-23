import React,{useState} from 'react'

function HookArrays() {

const [number,setnumber]=useState([])

const additem =() =>{
    setnumber([...number,{
        id:number.length,
        value :Math.floor(Math.random() *10) +1
    }])
}
    return (
        <div>
            <button onClick={additem}>add a number</button>
            <ul>
                {number.map(number =>(
                <li key={number.id}>{number.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookArrays
