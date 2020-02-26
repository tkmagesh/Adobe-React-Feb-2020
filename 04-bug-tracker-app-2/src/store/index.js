import { createStore, combineReducers, applyMiddleware } from 'redux';

import bugsReducer from '../bug-tracker/reducers';
import spinnerReducer from '../spinner/reducers';
import filterReducer from '../filter/reducers';

import promiseMiddleware from './middlewares/promiseMiddleware';
import asyncMiddleware from './middlewares/asyncMiddleware';
import loggerMiddleware from './middlewares/loggerMiddleware';

const rootReducer = combineReducers({
    spinnerState: spinnerReducer,
    bugsState: bugsReducer,
    filterState : filterReducer
});

const appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware, promiseMiddleware));

export default appStore;