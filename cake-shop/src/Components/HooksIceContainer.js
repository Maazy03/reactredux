import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyIce} from '../redux'
 function HooksIceContainer() {


    const nuofIce = useSelector((state)=>state.Ice.noofIce)
    const dispatch=useDispatch()

    return (
        <div>
     <h1>ICE HOOKS {nuofIce}</h1>  
           <button onClick={()=>dispatch(buyIce())}>SUBMIT</button>
        </div>
    )
}

export default HooksIceContainer

