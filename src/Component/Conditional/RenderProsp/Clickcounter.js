import React, { Component } from 'react'

class Clickcounter extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>clicked f <h1>{count}</h1> times</button>
            </div>
        )
    }
}

export default Clickcounter;