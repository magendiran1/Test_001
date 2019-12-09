//  Here we are studying about  HOC(Higher order Component)
// Function  take  function has parameter or argument and return new component

import React, { Component } from 'react'

export class Mouse extends Component {
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
        const {count}= this.state
        return (
            <div>
                <h1 onMouseOver={this.incrementCount} >Mouse move overthe {count}  number will increace</h1>
            </div>
        )
    }
}

export default Mouse