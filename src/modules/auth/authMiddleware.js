import * as constants from './constants';
import { serverLogin } from './api';
import { loginSuccess, loginFailure } from './actions';

export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === constants.LOGIN) {
        const user = action.payload;
        const success = await serverLogin(user);

        if (success) {
            store.dispatch(loginSuccess(user));
        } else {
            store.dispatch(loginFailure('error'));
        }
    } else {
        next(action);
    }
};