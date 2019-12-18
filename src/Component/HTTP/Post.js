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
    render() {
        const { userid, title, body } = this.state
        return (
            <div>
                <form>
                    <div>
                        <input type="text" name="userid" value={userid} onChange={this.changHandler} />
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changHandler} />
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changHandler} />
                    </div>

                </form>
            </div>
        );
    }
}

export default Post;