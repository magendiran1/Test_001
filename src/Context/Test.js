import React from 'react'
import {MyContext} from './User'
export default (props)=>{
    return(
        <MyContext.Consumer>
        {
(context)=>{
return(
<h1>Test Component {context.count}</h1>

)
}
}
</MyContext.Consumer>
    )
}