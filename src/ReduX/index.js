console.log("Hi magendiran")

// Action
// 1.Action  is the  only way  your  application can interact with the store(manage the state)
// 2.Action carry some Information from your application to Redux store
// 3. Action is plain javascript object
// 
// 4. Action have "type" that indicates the type of action  being performed
// 5. The "Type" property is typically defined by string constants


// Store
// 1.  one Store for Entire Application 
// 2.Allow  access to State via Getstate()
// 3.Allow update  to be updated via dispatch(action)
// 4.Register listeners via subscribe 
// 5. Handles Unregistering of listener via function returned by subscribe 

// Reducer
// 1.specify How The app's state changes In response to action  sent to the store 
// (previousstate,action)=>newstate

const Buy_cake ='Buy_cake'

 function Buycake(){
     return{
                  type: Buy_cake,
            info :'First redux action'
      
     }
 }

//  (prevState,action)=NewState

const Inittialstate ={
    cake:10
}

const reducer =(state=Inittialstate,action)=>{
switch(action.type){
    case Buy_cake:return{
        ...state,
        cake :cake -1
    }
    default :return state
}
}