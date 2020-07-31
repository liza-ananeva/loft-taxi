import { takeEvery, call, put } from 'redux-saga/effects';
import * as constants from './constants';
import { serverAddressList, serverRoute } from './api';
import { loadAddressListSuccess, loadAddressListFailure, сreateRouteSuccess, сreateRouteFailure } from './actions';

export function* addressListSaga() {
    yield takeEvery(constants.LOAD_ADDRESS_LIST, function* (action) {
        try {
            const response = yield call(serverAddressList);
        
            if (response) {
                yield put(loadAddressListSuccess(response.addresses));
            }
        } catch (error) {
            yield put(loadAddressListFailure(error.message));
        }
    });
}

export function* routeSaga() {
    yield takeEvery(constants.CREATE_ROUTE, function* (action) {
        try {
            const route = action.payload;
            const response = yield call(serverRoute, route);
        
            if (response.length) {
                console.log(response)
                yield put(сreateRouteSuccess(response));
            } else {
                throw new Error('Не удалось построить маршрут');
            }
        } catch (error) {
            yield put(сreateRouteFailure(error.message));
        }
    });
}
