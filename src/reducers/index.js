import counterReducer from './counter'
import loggedReucer from './isLogged'

import {combineReducers} from 'redux'

const allReducers =  combineReducers({
    counter: counterReducer,
    isLogged: loggedReucer
})

export default allReducers;