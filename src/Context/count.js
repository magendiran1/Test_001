import React, { Component } from 'react'
import Home from './Home'
import {MyContext} from './User'
class Count extends Component {
constructor(props) {
    super(props)

    this.state = {
         count :1
    }
}


    render() {
        const count =this.state.count
        return (
            <MyContext.Provider value={{count:count}}>
            <div>
                <Home counts={count} />
            </div>
        
            </MyContext.Provider>
        )
    }
}

export default Count
