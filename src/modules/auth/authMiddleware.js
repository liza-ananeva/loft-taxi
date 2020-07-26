import {
    login,
    loginSuccess,
    loginFailure,
    logout
} from './actions';
import { serverLogin } from './api';

export const authMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case login.toString():
            const user = action.payload;
            console.log('user: ', user);
            const success = await serverLogin(user);
            
            if (success) {
                localStorage.setItem('user', JSON.stringify(user));
                store.dispatch(loginSuccess(user));
            } else {
                store.dispatch(loginFailure('error'));
            }
            // (success) ? (
            //     localStorage.setItem('user', JSON.stringify(user)),
            //     store.dispatch(loginSuccess(user))
            // ) : (
            //     store.dispatch(loginFailure('error'))
            // );
            break;
        case logout.toString():
            localStorage.removeItem('user');
            break;
        default:
            break;
    }

    next(action);
}