import React from 'react'
import Test from './Test'

export default (props)=>{
    return(
        <>
<h1>Hello Component {props.counts} </h1>
      <Test count={props.counts} />
        </>
    )
}