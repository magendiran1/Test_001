import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             error :  null,
             errorinfo :null
        }
    }
    

    componentDidCatch(error,errorinfo){
        this.setState(
            {
                error :error,
                errorinfo :errorinfo
            }
        )
    }
    
    render() {
        if(this.state.error){
            return(
                <div>
                    <h2>Some things went to wrong</h2>
                    {this.state.errorinfo.componentStack}
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
