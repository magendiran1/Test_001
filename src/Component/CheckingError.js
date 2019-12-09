import React, { Component } from 'react'

export class CheckingError extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    changeCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        if(this.state.counter ===5){
            throw  new Error ('I crashed')
        }
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.changeCounter}>Increment</button>
            </div>
        )
    }
}

export default CheckingError
