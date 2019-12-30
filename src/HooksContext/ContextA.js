import React from 'react'
import ContextB from './ContextB'

export const Usercontext= React.createContext()
export const secondContext= React.createContext()

function ContextA() {
    return (
        <div>
            <Usercontext.Provider value={{name:"magendiran"}}>
                <secondContext.Provider value={{name:"Nagammal"}}>
            <ContextB />
            </secondContext.Provider>
            </Usercontext.Provider>
        </div>
    )
}

export default ContextA
