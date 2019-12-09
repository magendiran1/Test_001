import  React,  {Component} from 'react';
// import ChildComp from './ChildComp';
// import PureComp from './PureComp';
import MemoComp from './Memo';



class ParentComp extends Component{
  constructor(props) {
      super(props)
  
      this.state = {
           name :"mage"
      }
  }
  
  componentDidMount(){
      setInterval(
          ()=>{
this.setState({
    name :"mage"
})
          },2000
      )
  }
  changeName =()=>{
      this.setState({
          name :"mahe"
      })
  }
  
    render(){
        console.log("this is parent componet")
        return(

            <div>
                Parent Component
<button onClick={this.changeName}>Change name  in parent</button>
                {/* <ChildComp name ={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
                <MemoComp name ={this.state.name} />
            </div>
        )
    }
}

export default ParentComp;