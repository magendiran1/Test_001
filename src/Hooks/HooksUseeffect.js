import React, { useState, useEffect } from 'react';



// function HookUseeffect() {

// const [count,setCount]=useState(0);
// // const [useEffectCount,useEffectsetCount]=useState(0);
// const Increment =()=>{
//     setCount(count +1)
// }

// // useEffect(()=>{
// //     console.log("useeffect")
// //     // eslint-disable-next-line react-hooks/rules-of-hooks
// //     useEffectsetCount(useEffectCount + 1);
// //     document.title= ` ${count}`;
// // },[count]);

// console.log("outer side ")
//     return (
//         <div>

// Count :{count}
// {/* effectCount :{useEffectCount} */}
// <button onClick={Increment}>IncrementCount</button>

//         </div>
//     )

// }


// function HookUseeffect(){
//     const [count , setCount]= useState(0)

//     useEffect(()=>{
//         console.log("after the render method")
//         document.title=`how many ${count} time Clicked `
//     })

//     console.log("outer render method")
//     return(
//         <div>
// count:{count}
//     <button onClick={()=>setCount(count +1)}>count{count} times</button>
//         </div>
//     )
// }
// //  from above code we use the useEffect  first time its act like component didmount and when any 
// // change in the render like state updating that time  also  useEFFect will call  so we avoid
// //  that we can use the '[]'array option  because  useEFFect having two parameter one is function  and 
// // another one is ARRAy these will tell when UseEffect need execute

// export default HookUseeffect;

// This is code conditionally run UseEffect component didupdate
// function HookUseeffect(){
//     const [count , setCount]= useState(0)
//     const [name,setName]=useState('')

//     useEffect(()=>{
//         console.log("after the render method")
//         document.title=`how many ${count} time Clicked `
//     },[count])
// // from here every time we will type in input field UseEffect will call  so we need to avoid that we are array as two arugument 
//     return(
//         <div>

// <input type="text" value={name} onChange={e =>setName(e.target.value)} />
//     <button onClick={()=>setCount(count +1)}>count{count} times</button>
//         </div>
//     )
// }

// export default HookUseeffect;


//  Now we use the UseEffect with component didmount 

function HookUseeffect() {
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    const Logmosueposition = (e) => {
        console.log('mouse ,moiving')
        setX(e.clientX);
        setY(e.clientY)
    }
    useEffect(
        () => {
            window.addEventListener('mousemove', Logmosueposition)

            console.log('Mouse POsition')

            // Warning: Can't perform a React state update on an unmounted component. 
            // This is a no-op, but it indicates a memory leak in your application. To fix,
            //  cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
            // in HookUseeffect (at HookCleanup.js:10)
            //  so we return in arrow function please find the below code
return(
    ()=>{
        console.log("here component ummounted now ")
        window.removeEventListener('mousemove',Logmosueposition)
    }
)

        }, []
    )
    return (
        <div>
            <h1>Mouse moving Position x={X}; Y={Y}</h1>
        </div>
    )
}


export default HookUseeffect;
// useEffect vadhu take two parameter one is function and another one is variable
//  two important point useEffect  is component didmount
//    whenever component render After that useEffect will call
// use effect can be used use as component will unmount
