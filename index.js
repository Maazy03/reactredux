
const redux = require('redux')
const reduxLogger = require('redux-logger')

const logger =reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const ADD_CAKE = 'ADD_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
const middleware=redux.applyMiddleware
const createStore= redux.createStore


function buyCake()
{
    return{
        type:BUY_CAKE,
        info:"ACTIONNNNNNN"
    }
}
function addCake()
{
    return{
        type:ADD_CAKE,
        info:"ACTIONNNNNNN"
    }
}
function buyIce()
{
    return{
        type:BUY_ICECREAM,
        info:"ACTIONNNNNNN"
    }
}

const initialCakeState =
{
    numOfCakes:10
   
}

const Cakereducer = (state = initialCakeState,action) =>
{
    switch(action.type)
    {
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case ADD_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes + 1
        }
       
        default:return state
    }

}



const initialIceState =
{
   
    numofIce:20
}

const Icereducer = (state = initialIceState,action) =>
{
    switch(action.type)
    {
       
        case BUY_ICECREAM: return{
            ...state,
            numofIce: state.numofIce - 1
        }

        default:return state
    }

}


const rootreducer = redux.combineReducers({
    Cake:Cakereducer,
    Ice:Icereducer
})

const store = createStore(rootreducer,middleware(logger))
console.log('initial State',store.getState())


const unsusbcribe=store.subscribe(()=>{})

store.dispatch({type:ADD_CAKE})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(addCake())
store.dispatch(addCake())
store.dispatch(addCake())
store.dispatch(buyIce())
store.dispatch(buyIce())

unsusbcribe()

