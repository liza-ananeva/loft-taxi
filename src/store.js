import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './modules/auth';
import { authMiddleware } from './modules/auth/authMiddleware';

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(authMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
