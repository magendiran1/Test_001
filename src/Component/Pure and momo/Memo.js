import React from 'react'

function MemoComp({name}) {
    console.log('this is momo method')
    return (
        <div>
        {name}    
        </div>
    )
}

export default React.memo(MemoComp)
