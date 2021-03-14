const login = (state = false, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return !state
        default:
            return state
    }
}
const signup = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return !state
        default:
            return state
    }
}

export { login, signup };