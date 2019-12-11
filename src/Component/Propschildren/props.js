import React, { Component } from 'react'

 class Props extends Component {
    render() {
        return (
            <div>
                <p>lorem</p>
                {this.props.children}
             
            </div>
        )
    }
}

export default Props
