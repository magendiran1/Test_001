import React, { Component } from 'react'
import Mount from './Mount'

class Learn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mount: true
        }
    }
    changestate = () => {
        this.setState({
            mount: true
        })
    }

    changestate1 = () => {
        this.setState({
            mount: false
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.changestate} disabled={this.state.mount}>Mounting</button>
                <button onClick={this.changestate1} disabled={!this.state.mount}> Unmounting</button>
                {this.state.mount ? <Mount /> : null}
            </div>
        )
    }
}

export default Learn
