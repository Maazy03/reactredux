const redux=require('redux')

const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware=require('redux-thunk').default
const axios =require('axios')
const initialState={
    loading:false,
    users:[],
    error:''
}

const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST'
const FETCH_USERS_SUCESS = 'FETCH_USERS_SUCESS'
const FETCH_USERS_FAILS = 'FETCH_USERS_FAILS'


const fetchUserReq =()=>
{
    return{
        type:FETCH_USERS_REQUEST
    }

}


const fetchUserSucess=users=>
{
    return{
        type:FETCH_USERS_SUCESS,
        payload:users
    }

}
const fetchUserFail=error=>
{
    return{
        type:FETCH_USERS_FAILS,
        payload:error
    }

}

const reducer=(state=initialState,action)=>
{
switch(action.type)
{
    case FETCH_USERS_REQUEST:
        return{
            ...state,
            loading:true,
            
        }
        case FETCH_USERS_SUCESS:
        return{
            ...state,
            loading:false,
            users:action.payload,
            error:''
            
        }

        case FETCH_USERS_FAILS:
            return{
                ...state,
                loading:false,
                users:[],
                error:action.payload
                
            }
}
}

const fetchUsers = ()=>
{
    return function(dispatch)
    {
        dispatch(fetchUserReq)
        axios.get('https://jsonplaceholder.typicode.com/postsss')
        .then(response=>
        {
            const users=response.data.map(user=>user.title)
               dispatch(fetchUserSucess(users))
        })
        .catch(error=>
            {
                
                dispatch(fetchUserFail(error.message))
            })
    }
}

const store=createStore(reducer,applyMiddleware(thunkMiddleware))

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(fetchUsers())