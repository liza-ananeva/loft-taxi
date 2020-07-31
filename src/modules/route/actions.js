import { createAction } from 'redux-actions';
import * as constants from './constants';

export const loadAddressList = createAction(constants.LOAD_ADDRESS_LIST);
export const loadAddressListSuccess = createAction(constants.LOAD_ADDRESS_LIST_SUCCESS);
export const loadAddressListFailure = createAction(constants.LOAD_ADDRESS_LIST_FAILURE);

export const сreateRoute = createAction(constants.CREATE_ROUTE);
export const сreateRouteSuccess = createAction(constants.CREATE_ROUTE_SUCCESS);
export const сreateRouteFailure = createAction(constants.CREATE_ROUTE_FAILURE);
