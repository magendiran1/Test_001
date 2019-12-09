import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
        super(props)
    this.Username = React.createRef();
}
   
componentDidMount (){
        
         this.Username.current.focus();
    }

    SubmitAlert =() =>{
        alert(this.Username.current.value)
    }
    render() {
        return (
            <div>
                <span>Username : </span><input type="text" ref={this.Username}  />
                <br />
                <span>Submit</span>
                <button onClick={this.SubmitAlert}>Submit</button>      </div>
        )
    }
}

export default Refs

//First methods having three step 
// three step 
//1. in the input field give ref={this.}
//2.in the constructor this.username =React.createRef()
