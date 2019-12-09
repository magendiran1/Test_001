import React, { Component } from 'react'
import {Sec}  from './mutilpeclass/testing'

 class Props extends Component {
    render() {
        return (
            <div>
                <h1>lorem100</h1>
                {this.props.children}
                <Sec />
            </div>
        )
    }
}

export default Props
