import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import { bindActionCreators } from 'redux';
import appStore from './store';
import BugTracker from './bug-tracker';
import Spinner from './spinner';

import bugActionCreators from './bug-tracker/actions';
import spinnerActionCreators from './spinner/actions';

const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);
const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, appStore.dispatch);

window['appStore'] = appStore;

function renderApp() {
    const storeState = appStore.getState();
    const bugs = storeState.bugsState;
    const value = storeState.spinnerState;
    ReactDOM.render(
        <div>
            <Spinner value={value} {...spinnerActionDispatchers} />
            <br/>
            <BugTracker bugs={bugs} {...bugActionDispatchers} />
        </div>
        , document.getElementById('root'));
}

renderApp();
appStore.subscribe(renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
