// import { LOGIN, LOGIN_SUCCESS, LOGOUT } from './actions';
import {
    login,
    loginSuccess,
    loginFailure,
    logout
} from './actions';

const initialState = {
    isLoggedIn: !!localStorage.getItem('user'),
    user: JSON.parse(localStorage.getItem('user')) || {},
    isLoading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case login.toString():
            console.log('LOGIN');
            return {
                ...state,
                isLoading: true
            };
        case loginSuccess.toString():
            console.log('LOGIN_SUCCESS');
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                isLoading: false
            };
        case loginFailure.toString():
            console.log('LOGIN_FAILURE');
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload,
                isLoading: false
            };
        case logout.toString():
            console.log('LOGOUT');
            return {
                ...state,
                isLoggedIn: false,
                user: {}
            };
        default:
            return state;
    }
}
