import * as constants from './constants';
import { saveCardSuccess } from './actions';

export const cardMiddleware = (store) => (next) => async (action) => {
    if (action.type === constants.SAVE_CARD) {
        const card = action.payload;
        store.dispatch(saveCardSuccess(card));
    } else {
        next(action);
    }
};
