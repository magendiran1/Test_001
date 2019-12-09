import React, { Component } from 'react'

class Eventbind extends Component {
   constructor(Props){
       super(Props)
           this.state={
                   name:"This object bind in event component"
           }
       
           this.changeText =this.changeText.bind(this)
   }
//    changeText(){
//        this.setState({
//            name :"we bind the object using this object"
//        })

       changeText=() =>{
        this.setState({
            name :"we bind the object using this object"
        })
     
   }
   
    render() {
        return (
            <div>
                <h5>{this.state.name}</h5>
                {/* inga ena panna poramna  our object epadi bind panna pooramnu pakka pooram */}
{/* They are  four way to bind the object */}
{/* {First Method} straight we can bind the object like this */}
                {/* <button onClick={this.changeText.bind(this)}>how to bind the object</button> */}
                {/* this wii cause performance issue  */}
                {/* we go to {Second Method} */}
                {/* <button onClick={()=>this.changeText()}>This is Arrow</button> */}
                {/* this will also cause performance issue  */}
{/* Here are initialize the object in the constructor itself */}
                {/* <button onClick={this.changeText}>This is one is bind the object in the constructor</button> */}
{/* this is last method  */}
{/*  */}
                <button onClick={this.changeText}>This is one is bind the object in the constructor</button>


                
            </div>
        )
    }
}

export default Eventbind
