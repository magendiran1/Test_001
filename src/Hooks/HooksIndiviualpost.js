// Below code we will find the indiviual post

import React, { useState, useEffect } from 'react'
import axois from 'axios'
function HookFetchingdatabyuser() {
    const [post, setpost] = useState({})
const [id,setuserid]=useState()
const [changeid,buttonID]=useState()
const handerfetch =()=>{
buttonID(id)
}
    useEffect(
        () => {
            axois.get(`http://jsonplaceholder.typicode.com/posts/${changeid}`)
                .then(res => {
                    console.log(res)
setpost(res.data)
                }
                )
                .catch(err => {
                    console.log(err)
                })
        },[changeid]
    )
    return (
        <div>
<input type="text" value={id} onChange={e=>setuserid(e.target.value)  } />
<button type="button" onClick={handerfetch}>Fetch data</button>
            {post.title}
            {/* <ul>
                {post.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}


export default HookFetchingdatabyuser
