import { combineReducers } from 'redux'
import cakeReducer from './cakes/CakesReducer'

import Icereducer from './Icecream/IceReducers'
import userReducer from './User/UserReducers'

const Rootreducer=combineReducers({
    Cake:cakeReducer,
    Ice:Icereducer,
    user:userReducer
 })

 export default Rootreducer