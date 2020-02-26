import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bug-tracker/reducers';
import spinnerReducer from '../spinner/reducers';
import filterReducer from '../filter/reducers';

const rootReducer = combineReducers({
    spinnerState: spinnerReducer,
    bugsState: bugsReducer,
    filterState : filterReducer
});

function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.log(action);
            console.group('BEFORE');
            console.log(store.getState());
            console.groupEnd();
            next(action);
            console.group('AFTER');
            console.log(store.getState());
            console.groupEnd();
            console.groupEnd();
        }
    }
}

const asyncMiddleware = store => next => action => {
    if (typeof action === 'function'){
        return action(store.dispatch, store.getState);
    } else {
        return next(action);
    }
}

const promiseMiddleware = store => next => promiseAction => {
    if (promiseAction instanceof Promise){
        promiseAction
            .then(action => next(action));
    } else {
        return next(promiseAction);
    }
}

const appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware, promiseMiddleware));

export default appStore;