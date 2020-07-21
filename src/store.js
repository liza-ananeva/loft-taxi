import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { authMiddleware } from './authMiddleware';

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(authMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
