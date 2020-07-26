import { createAction } from 'redux-actions';

export const login = createAction('LOGIN');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFailure = createAction('LOGIN_FAILURE');
export const logout = createAction('LOGOUT');
