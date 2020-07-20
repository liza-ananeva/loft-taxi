import { LOGIN, LOGOUT } from '../actions';

const initialState = {
    isLoggedIn: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN: {
            return { isLoggedIn: true }
        }
        case LOGOUT: {
            return { isLoggedIn: false }
        }
        default:
            return state;
    }
}