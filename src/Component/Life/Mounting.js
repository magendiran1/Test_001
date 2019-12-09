import React, { Component } from 'react';
// import Child from './child';

class Mounting extends Component {

    constructor(Props) {
        super(Props)
        this.state = {
            age: 20,
            name: "B"
        }
        console.log("this is constructor run first ");
this.changeState =this.changeState.bind(this);
    }
    static getDerivedStateFromProps(Props, state) {
        console.log("getderivedstatefromprops")
        return {
            name :"magendiran"
        };
    }


    changeState () {
        this.setState({
            name: "Mahi"
        })
    }
    componentDidMount() {

        console.log("componentdidmount")
        console.log('-----------------------------------------')
    }
    render() {
        console.log("render")

        return (
            <div>
               {this.state.name}
                {/* <Child  passing={this.state.name}/> */}
                <button onClick={this.changeState} >Button</button>

            </div>
        )
    }
}
export default Mounting;


///Mounting

// first  its will call constructor 
//  second method 
//  Static Method  static getDrivedStatefromProps 
// third method
// render()
// Componmentdidmount (invoked immediately after the a componment and all its childer component have been rendered to the dom)
// this method is best place to make ajax call





