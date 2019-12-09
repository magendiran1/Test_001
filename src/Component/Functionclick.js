import React from 'react';

const FunctionClick =()=>{
    function changeText() {
        alert(`Hi this is function Alert`)
    }
    return(
        <div>
<button onClick={changeText}>Function click</button>
{/* In the function we don't need tho use "This" we can directly call the function name 
like above we call the function name "changetext" */}
        </div>
    )
}

export default FunctionClick;  