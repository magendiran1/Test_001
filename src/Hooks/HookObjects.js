import React, { useState } from 'react'

function HookObjects() {

    const [name, setname] = useState({ firstname: "", lastname: "" })
    return (
        <div>
            <form>
                <input type="text"value={name.firstname} onChange={e=>setname({...name,firstname :e.target.value})} />
                <input type="text"  value={name.lastname} onChange={e=>setname({...name,lastname:e.target.value})}/>
    <strong>{name.firstname}</strong>
    <strong> {name.lastname}</strong>

            </form>
        </div>
    )
}

export default HookObjects


// seperate operator (...name) ithu ethukku na vadhu itha functional component vadhu normal vadhu
//  class object combine pannu but intha functional component  combine pannadhadhu so athukudha vadhu
// seperate operator use pannrom 

