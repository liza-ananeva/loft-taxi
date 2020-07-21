import { LOGIN, LOGIN_SUCCESS, LOGOUT } from '../actions';

const initialState = {
    isLoggedIn: false,
    isLoading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            return { ...state, isLoading: true }
        case LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true }
        case LOGOUT:
            return { ...state, isLoggedIn: false }
        default:
            return state;
    }
}