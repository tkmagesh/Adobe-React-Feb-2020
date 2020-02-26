import { createStore, combineReducers } from 'redux';
import bugsReducer from '../bug-tracker/reducers';
import spinnerReducer from '../spinner/reducers';
import filterReducer from '../filter/reducers';

const rootReducer = combineReducers({
    spinnerState: spinnerReducer,
    bugsState: bugsReducer,
    filterState : filterReducer
});

const appStore = createStore(rootReducer);

export default appStore;