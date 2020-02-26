import { createStore, combineReducers } from 'redux';
import bugsReducer from '../bug-tracker/reducers';
import spinnerReducer from '../spinner/reducers';

const rootReducer = combineReducers({
    spinnerState: spinnerReducer,
    bugsState: bugsReducer
});

const appStore = createStore(rootReducer);

export default appStore;