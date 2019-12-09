// javascript XMl(JSX)
// JSX tag have tag name,attributes,children
//jsx use panna react vadhu easy and elagent 
// jsx is not necessity to write React Application
 import React from 'react'
 
  function JSX() {
    //  return (
    //      <div>
    //          <h1>Hi Mage</h1>
    //      </div>
    //  )
//  without using jsx 
 return React.createElement('div',null,React.createElement("h1",null,"Hi mage"))

 }
 
 export default JSX;