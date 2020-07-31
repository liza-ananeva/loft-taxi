import { takeEvery, call, put } from 'redux-saga/effects';
import * as constants from './constants';
import { serverSaveCard, serverGetCard } from './api';
import { saveCardSuccess, saveCardFailure, getCardSuccess, getCardFailure } from './actions';

export function* saveCardSaga(action) {
    try {
        const card = action.payload;
        const response = yield call(serverSaveCard, card);
    
        if (response.success) {
            yield put(saveCardSuccess(card));
        } else {
            throw response.error;
        }
    } catch (error) {
        yield put(saveCardFailure(error));
    }
}

export function* getCardSaga(action) {
    try {
        const response = yield call(serverGetCard);
    
        if (response) {
            yield put(getCardSuccess(response));
        }
    } catch (error) {
        yield put(getCardFailure(error.message));
    }
}

export function* paymentSaga() {
    yield takeEvery(constants.SAVE_CARD, saveCardSaga);
}

export function* cardDetailsSaga() {
    yield takeEvery(constants.GET_CARD, getCardSaga);
}