import {createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import Rootreducer from './Rootreducer'
import thunk from 'redux-thunk'

const store=createStore(Rootreducer, composeWithDevTools(applyMiddleware(logger,thunk)))
  

export default store