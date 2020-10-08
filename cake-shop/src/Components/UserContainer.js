import React,{useEffect} from 'react'
import {connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({ userData,fetchUser }) {

    useEffect(() => {
        fetchUser()
    }, [])

    
    
    
    console.log("fix",userData)
    return ( userData.loading ?
        (
            <h2>Loading</h2>
        ):userData.error ?
        (
        <h2>{userData.error}</h2>
        ):(  <div>
            <h1>UUSER LIST</h1>
            <div>
                {
                    userData && userData.users && userData.users.map(user=><p>{user.title}</p>)
                }
            </div>
        </div>
        )
    )
}


const mapStateToProps=(state)=>
{
    console.log("STATE",state)
    return{ 
        userData:state.user
    }
}
const  mapDispatchToProps=(dispatch)=>
 {
      return {
          fetchUser:()=>dispatch(fetchUsers())
      }
 
}
export default connect(mapStateToProps,mapDispatchToProps)( UserContainer)
