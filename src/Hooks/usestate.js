import React ,{useState} from 'react'

function HookCounter() {
  const [count, IncrementCount] =useState(0)
  const [name, Displayname] = useState('magendiran')
    return (
        <div>
<button onClick={()=>IncrementCount(count +1)}>count{count}</button>
    <button onClick={()=>Displayname('chak')}>name  :{name}</button>
        </div>
    )
}

export default HookCounter


//This is useState  from Hooks conpext   
// we use the state in class component but using USESTATE  its work in functional component