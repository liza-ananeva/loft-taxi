import { takeEvery, call, put } from 'redux-saga/effects';
import * as constants from './constants';
import { serverLogin, serverSignup } from './api';
import { loginSuccess, loginFailure, signupSuccess, signupFailure } from './actions';

export function* loginSaga(action) {
    try {
        const user = action.payload;
        const response = yield call(serverLogin, user);
    
        if (response.success) {
            yield put(loginSuccess(user));
        } else {
            throw response.error;
        }
    } catch (error) {
        yield put(loginFailure(error));
    }
}

export function* signupSaga(action) {
    try {
        const user = action.payload;
        const response = yield call(serverSignup, user);
    
        if (response.success) {
            yield put(signupSuccess(user));
        } else {
            throw response.error;
        }
    } catch (error) {
        yield put(signupFailure(error));
    }
}

export function* authorizationSaga() {
    yield takeEvery(constants.LOGIN, loginSaga);
}

export function* registrationSaga() {
    yield takeEvery(constants.SIGNUP, signupSaga);
}
