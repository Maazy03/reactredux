import { BUY_CAKE } from './CakeTypes'

const initialState={
    noofCakes:10
}


const cakeReducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:  return{
                ...state,
                noofCakes:state.noofCakes-action.payload
            }
            
            default: return state
    }
}

export default cakeReducer