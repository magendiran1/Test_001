import React, { Component } from 'react'

class ChildComp extends Component {
    render() {
        console.log("this chilg component -------------")
        return (
            <div>
            this is child class Component    {this.props.name}
            </div>
        )
    }
}

export default ChildComp
