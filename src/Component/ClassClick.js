import React, { Component } from 'react';

class Clickinclass extends Component {
changetext(){

    alert(`this is normal class click event next we see how to bind the object`)
}

    render() {
        return (
            <div>
                <button onClick={this.changetext}>classClick</button>
            </div>
        )
    }
}

// // what is difference in class click and function click  in the 
// CLASS click event  we use the {this keyword } but in the function 
//we are not using {this keyword}
export default Clickinclass;