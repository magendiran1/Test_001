import React, { Component } from 'react';
import axois from 'axios'

class Getmethod extends Component {
    constructor(props) {
        super(props);
        
    this.state ={
        Post :[],
        errorMsg : ''
    }
    }
    componentDidMount(){
        axois.get('http://jsonplaceholder.typicode.com/posts')
        .then(Response=>{
            console.log(Response)
            this.setState({Post:Response.data})
        })
        .catch(error =>{
            console.log(error)
            this.setState({errorMsg : 'Error while Retreiving data'})
        })
    }

    render() {
        const {Post,errorMsg}=this.state
        return (
            <div>
                <h2>post method </h2>
                {
                    Post.length ?
                Post.map(Post => <div key={Post.id}>{Post.title}{Post.body}</div>) :
                    null
                }
                {errorMsg ? <div>{errorMsg}</div> :null}
            </div>
        );
    }
}

export default Getmethod;