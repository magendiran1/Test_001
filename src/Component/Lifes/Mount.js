import React, { Component } from 'react'

class Mount extends Component {

constructor(props) {
    super(props)

    this.state = {
         counter : 0
    }
    console.log("constructor")
}
incrementNumber =()=>{
    this.setState({
        counter : this.state.counter +1

    })
}

decrementNumber =() =>{
    this.setState({
        counter :this.state.counter -1
    })
}

componentDidMount(){
    console.log("compoentent didmount");
    console.log("------------------------")
}

componentDidUpdate(prevprops,prevstate,snapshot)
{
    console.log("componentdidupdate");
    console.log("--------------------------")
}
componentWillUnmount() {
    console.log("componentunmount");
    console.log('------------------------------')
}

render() {
        console.log("render")

        return (
            <div>
                <h1>{this.state.counter}
</h1>
<button onClick={this.incrementNumber}>Increment</button>
<button onClick={this.decrementNumber}>Decrement</button>

            </div>
        )
    }
}


export default Mount
