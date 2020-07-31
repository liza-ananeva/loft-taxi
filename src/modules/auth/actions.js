import { createAction } from 'redux-actions';
import * as constants from './constants';

export const login = createAction(constants.LOGIN);
export const loginSuccess = createAction(constants.LOGIN_SUCCESS);
export const loginFailure = createAction(constants.LOGIN_FAILURE);
export const logout = createAction(constants.LOGOUT);

export const signup = createAction(constants.SIGNUP);
export const signupSuccess = createAction(constants.SIGNUP_SUCCESS);
export const signupFailure = createAction(constants.SIGNUP_FAILURE);
