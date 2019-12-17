import React, { Component } from 'react'

export const Mycontext = React.createContext({})

export class Statecontext extends Component{
    constructor(props) {
        super(props)

        this.state = {
            count: 1
        }
    }

    
    Increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    Decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
        
    render(){
        
        const count = this.state.count
        return(
            <>
            
            <Mycontext.Provider value={{count :count,Increment:this.Increment,Decrement:this.Decrement}}>
         {   this.props.children}
            </Mycontext.Provider>

            </>
        )
        
    }

}