import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log("pure compoent")
        console.log('....................')
        return (
            <div>
             This is PureComponent    {this.props.name}
            </div>
        )
    }
}

export default PureComp
