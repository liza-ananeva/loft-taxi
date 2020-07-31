import { authorizationSaga, registrationSaga } from '../auth/saga';
import { paymentSaga, cardDetailsSaga } from '../card/saga';
import { addressListSaga, routeSaga } from '../route/saga';
import { fork } from 'redux-saga/effects';

export default function* () {
    yield fork(authorizationSaga);
    yield fork(registrationSaga);
    yield fork(paymentSaga);
    yield fork(cardDetailsSaga);
    yield fork(addressListSaga);
    yield fork(routeSaga);
}
