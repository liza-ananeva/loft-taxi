import { combineReducers } from 'redux';

import authReducer from '../auth';
import cardReducer from '../card';
import routeReducer from '../route';

export default combineReducers({ auth: authReducer, card: cardReducer, route: routeReducer });