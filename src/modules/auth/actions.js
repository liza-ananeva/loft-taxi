import { createAction } from 'redux-actions';
import * as constants from './constants';

export const login = createAction(constants.LOGIN);
export const loginSuccess = createAction(constants.LOGIN_SUCCESS);
export const loginFailure = createAction(constants.LOGIN_FAILURE);
export const logout = createAction(constants.LOGOUT);