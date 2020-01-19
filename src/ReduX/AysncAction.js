// Redux we are going to fetch the data
const redux =require('redux')
// Three things we need 
// 1.state (In the state we have three properties one is {loading,USER,ERROR)
// 2. Action 
// 3.reducer

const createStore =redux.createStore;
const applymidleware =redux.applyMiddleware
const thunkmidleware= require('redux-thunk').default
const axios =require('axios')
const initialstate = {
    loading :false,
    user :[],
    error :''
}

const Fetch_user_Request ="Fetch_User_Request";
const Fetch_user_Sucess ="Fetch_user_Sucess";
const Fetch_user_Failure ="Fetch_user_Failure";

const Fetchuserrequest =()=>{
    return{
        type :Fetch_user_Request
    }
}

const FetchuserSucess =(user)=>{
    return{
        type :Fetch_user_Sucess,
        payload :user 
    }
}

const FetchuserFailure =()=>{
    return{
        type :Fetch_user_Failure,
        payload :Error
    }
}

const reducer =(state=initialstate,action)=>{
    switch(action.type){
        case Fetch_user_Request :
            return{
                ...state,
                 loading :true
            }
            case Fetch_user_Sucess :
                return{
                    ...state,
                    loading:false,
                    user :action.payload,
                    error:''
                }
                case Fetch_user_Failure :
                    return{
                        loading :false,
                        user :[],
                        error:action.payload
                    }
   default :return state
                }

}
const fetchusers =()=>{
    return function(dispatch){
dispatch(Fetchuserrequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
.then(
    res =>{
const user =res.data.map(user =>user.id)
dispatch(FetchuserSucess(user))
    }
)
.catch(
    err =>{
dispatch(FetchuserFailure(err.message))

    }
)
    }
}


const Store =createStore(reducer,applymidleware(thunkmidleware))
Store.subscribe(()=>{console.log(Store.getState())})
Store.dispatch(fetchusers())