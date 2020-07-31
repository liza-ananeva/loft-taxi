import { createAction } from 'redux-actions';
import * as constants from './constants';

export const saveCard = createAction(constants.SAVE_CARD);
export const saveCardSuccess = createAction(constants.SAVE_CARD_SUCCESS);
export const saveCardFailure = createAction(constants.SAVE_CARD_FAILURE);

export const getCard = createAction(constants.GET_CARD);
export const getCardSuccess = createAction(constants.GET_CARD_SUCCESS);
export const getCardFailure = createAction(constants.GET_CARD_FAILURE);
