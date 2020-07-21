import { loginSuccess } from './actions';
import { LOGIN } from './actions';
import { serverLogin } from './api';

export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === LOGIN) {
        const { email, password } = action.payload;
        const success = await serverLogin(email, password);

        if (success) {
            store.dispatch(loginSuccess());
        }
    } else {
        next(action);
    }
}