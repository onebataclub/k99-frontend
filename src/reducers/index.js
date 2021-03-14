import { login, signup } from './isLogged'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    signup,
    login
})

export default allReducers;