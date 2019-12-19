import React, { Component } from 'react';

class Post extends Component {
    constructor() {
        super()
        this.state = {
            userid: '',
            title: '',
            body: ''
        }
    }
changHandler =e =>{
    this.setState({
        [e.target.name] :e.target.value
    })
}

submitHandler =e =>{
    e.preventDefault()
    console.log(this.state)
}
    render() {
        const { userid, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userid" value={userid} onChange={this.changHandler} />
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changHandler} />
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changHandler} />
                    </div>
<button type="submit">submit</button>
                </form>
            </div>
        );
    }
}

export default Post;