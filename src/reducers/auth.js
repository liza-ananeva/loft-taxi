import { LOGIN, LOGOUT } from '../actions';

const initialState = {
    isLoggedIn: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN: {
            console.log('LOGIN');
            return { isLoggedIn: true }
        }
        case LOGOUT: {
            console.log('LOGOUT');
            return { isLoggedIn: false }
        }
        default: {
            console.log('default');
            return state;
        }
    }
}