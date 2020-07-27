import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import authReducer from './modules/auth';
import cardReducer from './modules/card';
import { authMiddleware } from './modules/auth/authMiddleware';
import { cardMiddleware } from './modules/card/cardMiddleware';

const rootReducer = combineReducers({ auth: authReducer, card: cardReducer });

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(authMiddleware),
        applyMiddleware(cardMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
