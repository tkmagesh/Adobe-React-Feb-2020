let StateManager = (function(){
    let _currentState = undefined,
        _callbacks = [],
        _init_action = '@@INIT/ACTION',
        _reducer = undefined

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        _callbacks.push(callback);
    }

    function notifyStateChange(){
        _callbacks.forEach(callback => callback());
    }

    function dispatch(action){
        let newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        notifyStateChange();
    }

    function createStore(reducer) {
        _reducer = reducer;
        _currentState = _reducer(_currentState, _init_action);
        let store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore };
})();