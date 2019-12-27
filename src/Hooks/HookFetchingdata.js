import React, { useState, useEffect } from 'react'
import axois from 'axios'
function HookFetchingdata() {
    const [post, setposts] = useState([])

    useEffect(
        () => {
            axois.get('http://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    console.log(res)
setposts(res.data)
                }
                )
                .catch(err => {
                    console.log(err)
                })
        },[]
    )
    return (
        <div>
            <ul>
                {post.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

// Below code we will find the indiviual post

export default HookFetchingdata
