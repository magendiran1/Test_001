import React,{Component} from 'react';

class HoverCounter extends Component{
 
render() {  
    const {count,incrementCount}=this.props
    return(
        <div>
<button onMouseOver={incrementCount}>mouse move over the{count} times</button>
        </div>
    )
}
}
export default HoverCounter;