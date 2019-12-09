import React, { Component } from 'react'

class Button extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            count :0
       }
   }
   
   
incrementCount =()=>{
    this.setState(
        prevState =>{
            return {
                count : prevState.count +1
        }
        }
    )
}
   
    render() {
        const {count}=this.state
        return (
            <div>
                <button onClick={this.IncrementCount}>count number{count} increase</button>
            </div>
        )
    }
}

export default Button
