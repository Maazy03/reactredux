import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyCake} from '../redux'
function HooksCakeContainer() {

    const numofCakes=useSelector(state=>state.noofCakes)
    const dispatch = useDispatch()

    return (
        <div>

<h2>CAKE OCNTAINER {numofCakes}</h2>
    <button onClick={()=>dispatch(buyCake())}>DELETE</button>              


        </div>
    )
}

export default HooksCakeContainer