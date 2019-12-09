import React, { Component } from 'react'
import FRREF from './FRREF'

class FRParREF extends Component {

    constructor(props) {
        super(props)
    this.inputRef =React.createRef()
    }
    
    focusInput =() =>{
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
<FRREF ref={this.inputRef}/> 
{/* actually inga enna panna poram na ithu vadhu parent component kk va inga irudha (FRREF)child component ku  */}
<button onClick={this.focusInput}>Focus</button>                
            </div>
        )
    }
}

export default FRParREF
