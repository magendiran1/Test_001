import React, { Component } from 'react'
import Home from './Home'
import { Statecontext } from './Contexts'


class Count extends Component {
    
    render() {
        return (
            <Statecontext >
                <div>
                    <Home  />
                </div>
            </Statecontext>
        )
    }
}

export default Count
