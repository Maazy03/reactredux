import {  FETCH_USERS_REQUEST, FETCH_USERS_SUCESS,FETCH_USERS_FAIL } from './UserTypes'
import axios from 'axios'

export const fetchUserReq = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}


export const fetchUserSucess = (users) => {
    return {
        type: FETCH_USERS_SUCESS,
        payload: users
    }
}


export const fetchUserFail = (error) => {
    return {
        type: FETCH_USERS_FAIL,
        payload: error
    }
}

export const fetchUsers=()=>
{
    return (dispatch)=>
    {
        dispatch(fetchUserReq)

 axios.get('https://jsonplaceholder.typicode.com/posts')
 .then(response =>
    {
        const users=response.data
         dispatch(fetchUserSucess(users))
    })    
.catch(error=>
    {
        const errorMsg=error.message
        dispatch(fetchUserFail(errorMsg))
    })
}
}