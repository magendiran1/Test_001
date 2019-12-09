import React, { Component } from 'react'

class Element extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          islogged :true
     }
 }
 handlerin =() =>{
     this.setState({
         islogged :false
     })
 }

 handlerout =() => {
     this.setState({
         islogged :true
     })
 }

    render() {
        const islogged =this.state.islogged;
        let Message;
if(islogged){
    Message =<LoginButton onClick={this.handlerin} />
}        
else{
    Message =<LogoutButton onClick ={this.handlerout} />
}
        return (
            <div>
                <Greeting islogged={islogged} />
{Message}
            </div>
        )
    }
}

export function LoginButton(props){
    return <button onClick={props.onClick} >Login</button>
}

export function LogoutButton(props){
    return <button onClick={props.onClick}>Logout</button>
}

export function User(props){
    return <h1>Welcome back !   </h1>
}

export function Guest(Props){
    return <h1>Please sign up !  </h1>
}

export function Greeting(Props){
    const islogged =Props.islogged;
    if(islogged){
return <User />
    }
    else{
        return <Guest />
    }
}



export default Element
