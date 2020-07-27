import * as constants from './constants';

const initialState = {
    isLoggedIn: !!localStorage.getItem('user'),
    user: JSON.parse(localStorage.getItem('user')) || {},
    isLoading: false,
    error: null
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOGIN:
            console.log('LOGIN');
            return {
                ...state,
                isLoading: true
            };
        case constants.LOGIN_SUCCESS:
            console.log('LOGIN_SUCCESS');
            localStorage.setItem('user', JSON.stringify(action.payload));
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                isLoading: false
            };
        case constants.LOGIN_FAILURE:
            console.log('LOGIN_FAILURE');
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload,
                isLoading: false
            };
        case constants.LOGOUT:
            console.log('LOGOUT');
            localStorage.removeItem('user');
            return {
                ...state,
                isLoggedIn: false,
                user: {}
            };
        default:
            return state;
    }
}

export default auth;