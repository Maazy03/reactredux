import { FETCH_USERS_REQUEST, FETCH_USERS_SUCESS, FETCH_USERS_FAIL } from './UserTypes'



const initialState=
{
    loading:false,
    users:[],
    error:''
}

const userReducer=(state=initialState,action)=>
{
    switch(action.type)
{
    case FETCH_USERS_REQUEST:
        return{
            ...state,
            loading:true
        }
        case FETCH_USERS_SUCESS:
        return{
            ...state,
            loading:false,
            users:action.payload,
            error:''
        }
        case FETCH_USERS_FAIL:
        return{
            ...state,
            loading:false,
            error:action.payload,
            users:''

        }
        default: return state
}
}

export default userReducer