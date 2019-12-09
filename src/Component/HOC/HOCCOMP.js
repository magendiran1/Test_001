import React ,{Component} from 'react'

const  HOC = originalComponent =>{
class NewComponent extends Component{
    render(){
        return <originalComponent />
    }
}
return NewComponent
}

export default HOC