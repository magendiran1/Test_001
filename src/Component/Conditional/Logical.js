

import React from 'react'

const Messages = ['React', 'Re: React', 'Re:Re: React',"hello"];

function Logical(props) {
    return (
        <div>
            <h1>Hello </h1>{Messages.length>0 && <h1>you have {Messages.length}     unread message</h1>}
        </div>
    )
}

export default Logical;