import { BUY_ICE} from './IceTypes'

const initialState={
    noofIce:20
}

const Icereducer = (state=initialState,action)=>
{
    switch(action.type)
    {
        case BUY_ICE:
            return{
                ...state,
                noofIce:state.noofIce-1
            }
        default:
            return state
        }


}

export default Icereducer